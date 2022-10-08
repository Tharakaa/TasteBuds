const express = require("express");
const { getAllItem } = require("../controllers/itemController.js");

const router = express.Router();

router.get("/outlet/:outletId", getAllItem);

module.exports = router;
