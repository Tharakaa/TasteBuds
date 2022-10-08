const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  rating: Number,
  imgUrl: { type: String, required: true },
  qty: { type: Number, required: true },
  outletId: {
    type: String,
    required: true, 
  },
  userIds: [{ type: String }],
});

const Outlet = mongoose.model("Item", itemSchema);
module.exports = Outlet;
