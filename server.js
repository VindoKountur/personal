const express = require("express");
const app = express();
const morgan = require('morgan');
const webpush = require("web-push");
const cors = require("cors");
require("dotenv").config();

const provinsi = require("./router/provinsi");
const covidNews = require("./router/covidNews");
const algoritmaSaw = require("./router/saw");
const covid = require("./router/covid");
const qod = require('./router/qod');

app.use(express.json()); // Body Parser
app.use(cors());
app.use(morgan('tiny'));

webpush.setVapidDetails(
  "mailto:test@test.com",
  process.env.PUBLIC_VALID_KEY,
  process.env.PRIVATE_VALID_KEY
);

app.use("/api/provinsi", provinsi);
app.use("/api/covidnews", covidNews);
app.use("/api/covid", covid)
app.use("/api/algoritma/saw", algoritmaSaw);
app.use('/subscribe', qod);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    routes: {
      provinsi: "/api/provinsi",
      covid19News: "/api/covidnews",
      lokalcovid: "api/covid/lokal",
      provinsicovid: "api/covid/provinsi"
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Start at PORT ${PORT}`));
