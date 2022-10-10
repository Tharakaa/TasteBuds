const mongoose = require("mongoose");

// Create a nested schema to support multiple items with different quantities
const orderItem = new mongoose.Schema(
  {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
      qty: { type: Number, required: true },
      unitPrice: { type: Number, required: true }
  }
);

const schema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    itemIds: { type: [orderItem], required: true }, // There are multiple items with different quantities in the same order
    totalAmount: { type: Number, required: true },
    paymentType: { type: String, enum: ["CARD", "PAYPAL", "COD"] }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", schema);
module.exports = Order;
