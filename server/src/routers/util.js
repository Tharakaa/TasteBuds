const express = require("express");
const router = express.Router();
const { upload } = require("../controllers/utilController.js");

router.post("/upload", upload);

module.exports = router;
