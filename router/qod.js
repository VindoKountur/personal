const express = require("express");
const router = express.Router();

const { pushQuotes } = require("../controllers/qod");

router.route("/").post(pushQuotes);

module.exports = router;
