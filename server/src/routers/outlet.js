const express = require("express");
const { getAllOutlet, getById, create, deleteById } = require("../controllers/outletController.js");

const router = express.Router();

router.post("/", create);
router.get("/", getAllOutlet);
router.get("/:id", getById);
router.delete("/:id", deleteById);

module.exports = router;
