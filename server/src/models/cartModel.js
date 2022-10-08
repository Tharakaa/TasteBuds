const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    itemId: { type: String, required: true },
    qty: { type: Number, required: true },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", schema);
module.exports = Cart;
