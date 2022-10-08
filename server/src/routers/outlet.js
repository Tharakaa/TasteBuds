const express = require("express");
const { getAllOutlet } = require("../controllers/outletController.js");

const router = express.Router();

router.get("/", getAllOutlet);

module.exports = router;
