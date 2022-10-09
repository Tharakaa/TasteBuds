const express = require("express");
const {getCartForUser, changeItemQty} = require("../controllers/cartController");

const router = express.Router();

router.get("/getCart", getCartForUser);

router.post("/changeItemQty", changeItemQty);

module.exports = router;
