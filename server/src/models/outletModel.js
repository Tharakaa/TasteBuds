const mongoose = require("mongoose");

const outletSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true },
    rating: { type: Number, default: 2.5 },
    lat: Number,
    long: Number,
    address: { type: String, required: true },
  },
  { timestamps: true }
);

const Outlet = mongoose.model("Outlet", outletSchema);
module.exports = Outlet;
