const express = require("express");
const { getAllOutlet, getById } = require("../controllers/outletController.js");

const router = express.Router();

router.get("/", getAllOutlet);
router.get("/:id", getById);

module.exports = router;
