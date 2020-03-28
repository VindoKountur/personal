const express = require('express');
const router = express.Router();

const { algoritmaSaw } = require('../controllers/saw');

router.route("/").post(algoritmaSaw);

module.exports = router;