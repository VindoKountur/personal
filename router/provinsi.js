const express = require("express");
const router = express.Router();

const { getAllProvinsi } = require("../controllers/provinsi");

router.route("/").get(getAllProvinsi);

module.exports = router;
