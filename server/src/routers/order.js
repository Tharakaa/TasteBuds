const express = require("express");
const { placeOrder, getOrdersForUser } = require("../controllers/orderController.js");

const router = express.Router();

router.post("/placeOrder", placeOrder);

router.get("/getOrders", getOrdersForUser);

module.exports = router;
