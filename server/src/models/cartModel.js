const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true }, // Object id is defined to populate (foreign key)
    qty: { type: Number, required: true },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", schema);
module.exports = Cart;
