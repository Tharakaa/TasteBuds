const express = require("express");
const { createUser, getAllUsers } = require("../controllers/userController.js");
const logger = require("../middleware/logger.js");
const authenticate = require("../middleware/authenticate.js");

const router = express.Router();

router.post("/register", logger, authenticate, createUser);
router.get("/", logger, authenticate, getAllUsers);

module.exports = router;

