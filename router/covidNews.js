const express = require("express");
const router = express.Router();

const { getCovidNews } = require("../controllers/covidNews");

router.route("/").get(getCovidNews);

module.exports = router;
