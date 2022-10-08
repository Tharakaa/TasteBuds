const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    userId: { type: Number, required: true },
    itemIds: { type: [String], required: true },
    totalAmount: { type: Number, required: true },
    paymentType: { type: String, enum: ["CARD", "PAYPAL"] }
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", schema);
module.exports = Item;
