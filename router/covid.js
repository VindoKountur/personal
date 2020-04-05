const express = require("express");
const route = express.Router();

const {getDataLokal, getDataProvinsi} = require("../controllers/covid");

route.route("/lokal").get(getDataLokal);
route.route("/provinsi").get(getDataProvinsi);

module.exports = route;