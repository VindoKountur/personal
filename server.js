const express = require("express");
const axios = require("axios");
const app = express();
const morgan = require('morgan');
const cors = require("cors");
require("dotenv").config();

const provinsi = require("./router/provinsi");
const covidNews = require("./router/covidNews");
const algoritmaSaw = require("./router/saw");

app.use(express.json()); // Body Parser
app.use(cors());
app.use(morgan('tiny'));

app.use("/api/provinsi", provinsi);
app.use("/api/covidnews", covidNews);
app.use("/api/algoritma/saw", algoritmaSaw);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    routes: {
      provinsi: "/api/provinsi",
      covid19News: "/api/covidnews"
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Start at PORT ${PORT}`));
