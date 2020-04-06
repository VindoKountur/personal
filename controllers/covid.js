const axios = require("axios");

const urlLokal = "https://api.kawalcorona.com/indonesia";
const urlGlobalPositif = "https://api.kawalcorona.com/positif";
const urlProvinsi = "https://api.kawalcorona.com/indonesia/provinsi";

const toNumber = (str) => {
  let newNum = str.split(",").join("");
  let theNum = Number(newNum);
  return theNum;
};

exports.getDataLokal = async (req, res, next) => {
  try {
    let jumlahGlobalPositif;
    // GlobalPositif
    const globalResponse = await axios.get(urlGlobalPositif);
    jumlahGlobalPositif = toNumber(globalResponse.data.value);

    // Lokal
    const lokalResponse = await axios.get(urlLokal);
    let { positif, sembuh, meninggal } = lokalResponse.data[0];
    const numPositif = toNumber(positif);
    const numSembuh = toNumber(sembuh);
    const numMeninggal = toNumber(meninggal);
    const perawatan = numPositif - (numSembuh + numMeninggal);
    const persenPositif = ((numPositif / jumlahGlobalPositif) * 100).toFixed(2);
    const persenSembuh = ((numSembuh / numPositif) * 100).toFixed(2);
    const persenMeninggal = ((numMeninggal / numPositif) * 100).toFixed(2);
    const tmpData = {
      positif: numPositif,
      perawatan,
      sembuh: numSembuh,
      meninggal: numMeninggal,
      persenPositif,
      persenSembuh,
      persenMeninggal,
    };
    res.json({
      success: true,
      data: tmpData,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "error getting data",
      err,
    });
  }
};

exports.getDataProvinsi = (req, res, next) => {
  let provinsi = [];
  axios
    .get(urlProvinsi)
    .then((response) => {
      response.data.map((value) => {
        const newProvinsi = {
          id: provinsi.length + 1,
          nama: value.attributes.Provinsi,
          positif: value.attributes.Kasus_Posi,
          sembuh: value.attributes.Kasus_Semb,
          meninggal: value.attributes.Kasus_Meni,
        };
        provinsi = [...provinsi, newProvinsi];
      });
      res.status(200).json({
        success: true,
        data: provinsi,
      });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: "error getting data",
        err,
      });
    });
};
