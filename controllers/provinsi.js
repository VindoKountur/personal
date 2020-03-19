exports.getAllProvinsi = async (req, res) => {
  const dataProvinsi = [
    {id: 1, nama : 'Aceh'},
    {id: 2, nama : 'Sumatera Utara'},
    {id: 3, nama : 'Sumatera Barat'},
    {id: 4, nama : 'Riau'},
    {id: 5, nama : 'Kepulauan Riau'},
    {id: 6, nama : 'Jambi'},
    {id: 7, nama : 'Bengkulu'},
    {id: 8, nama : 'Sumatera Selatan'},
    {id: 9, nama : 'Kepulauan Bangka Belitung'},
    {id: 10, nama : 'Lampung'},
    {id: 11, nama : 'Banten'},
    {id: 12, nama : 'Jawa Barat'},
    {id: 13, nama : 'Jakarta'},
    {id: 14, nama : 'Jawa Tengah'},
    {id: 15, nama : 'Yogyakarta'},
    {id: 16, nama : 'Jawa Timur'},
    {id: 17, nama : 'Bali'},
    {id: 18, nama : 'Nusa Tenggara Barat'},
    {id: 19, nama : 'Nusa Tenggara Timur'},
    {id: 20, nama : 'Kalimantan Utara'},
    {id: 21, nama : 'Kalimantan Barat'},
    {id: 22, nama : 'Kalimantan Tengah'},
    {id: 23, nama : 'Kalimantan Selatan'},
    {id: 24, nama : 'Kalimantan Timur'},
    {id: 25, nama : 'Gorontalo'},
    {id: 26, nama : 'Sulawesi Utara'},
    {id: 27, nama : 'Sulawesi Barat'},
    {id: 28, nama : 'Sulawesi Tengah'},
    {id: 29, nama : 'Sulawesi Selatan'},
    {id: 30, nama : 'Sulawesi Tenggara'},
    {id: 31, nama : 'Maluku Utara'},
    {id: 32, nama : 'Maluku'},
    {id: 33, nama : 'Papua Barat'},
    {id: 34, nama : 'Papua'},
  ];
  try {
    return res.status(200).json({
      success: true,
      sumber: 'https://www.zonareferensi.com/provinsi-di-indonesia/',
      data : dataProvinsi
    })  
  } catch (err) {
    return res.status(500).json({
      success: false,
      error : 'Server Error 🌼🌼'
    })
  }
  
}