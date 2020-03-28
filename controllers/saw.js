exports.algoritmaSaw = (req, res) => {
  const { bobot, alternative } = req.body;
  
  // Algoritma SAW
  const normalisasiNilai = (bbt, alt) => {
    // Cek bobot
    if (bbt.harga + bbt.ram + bbt.processor + bbt.kapasitas !== 1) {
      res.status(400).json({
        success: false,
        message : 'Nilai jumlah bobot yang diberikan harus bernilai 1'
      })
      return;
    }
    let kriteria = {
      harga: {
        daftar: [],
        min: null,
        norm: [],
        bobot: bbt.harga
      },
      ram: {
        daftar: [],
        max: null,
        norm: [],
        bobot: bbt.ram
      },
      processor: {
        daftar: [],
        max: null,
        norm: [],
        bobot: bbt.processor
      },
      kapasitas: {
        daftar: [],
        max: null,
        norm: [],
        bobot: bbt.kapasitas
      }
    };
    // Set Daftar Alternative
    alt.map(nilai => {
      kriteria.harga.daftar.push(nilai.harga);
      kriteria.ram.daftar.push(nilai.ram);
      kriteria.processor.daftar.push(nilai.processor);
      kriteria.kapasitas.daftar.push(nilai.kapasitas);
    });
    // Set nilai min & max
    kriteria.harga.min = Math.min(...kriteria.harga.daftar);
    kriteria.ram.max = Math.max(...kriteria.ram.daftar);
    kriteria.processor.max = Math.max(...kriteria.processor.daftar);
    kriteria.kapasitas.max = Math.max(...kriteria.kapasitas.daftar);
  
    // Hitung Normalisasi
    hitungNorm = (k, m) => {
      kriteria[k].daftar.map(nilai => {
        let hasil;
        m === "max"
          ? (hasil = nilai / kriteria[k][m])
          : (hasil = kriteria[k][m] / nilai);
        kriteria[k].norm.push(hasil);
      });
    };
    // Harga
    hitungNorm("harga", "min");
    // Ram
    hitungNorm("ram", "max");
    // Processor
    hitungNorm("processor", "max");
    // Kapasitas
    hitungNorm("kapasitas", "max");
    // Selesai hitung normalisasi
  
    // Hitung hasil
    let hasil = [];
    alt.map((nilai, i) => {
      let hasilTmp =
        kriteria.harga.bobot * kriteria.harga.norm[i] +
        kriteria.ram.bobot * kriteria.ram.norm[i] +
        kriteria.processor.bobot * kriteria.processor.norm[i] +
        kriteria.kapasitas.bobot * kriteria.kapasitas.norm[i];
      hasil.push({ nama: nilai.nama, hasil: hasilTmp });
    });
    return hasil;
  };

  const hasil = normalisasiNilai(bobot, alternative);
  res.status(200).json({
    success : true,
    data : hasil
  })
  console.log(hasil);
}