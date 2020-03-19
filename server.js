const express = require('express');
const axios = require('axios');
const app = express();

const provinsi = require('./router/provinsi');

let fetchData = async (url) => {
    const res = await axios.get(url);
    const data = res.data;
    return data;
}
// let tesFu  = async () => {
//   let data = await fetchData('https://covid19.mathdro.id/api');
//   // WORLD
//   world = {
//     confirmed : data.confirmed.value
//   }
// }
// let world;

// tesFu();

app.use("/api/provinsi", provinsi);

app.get("/", (req, res) => {
  res.status(200).json(
    {
      success: true,
      routes : {
        provinsi : "/api/provinsi"
      }
    }
  )
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Start at PORT ${PORT}`));