const express = require("express");
const {addToCart, getCartForUser, changeItemQty} = require("../controllers/cartController");

const router = express.Router();

router.post("/addToCart", addToCart);

router.get("/getCart", getCartForUser);

router.post("/changeItemQty", changeItemQty);

module.exports = router;
