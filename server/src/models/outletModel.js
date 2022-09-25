const mongoose = require("mongoose");

const outletSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  address: String,
  rating: Number,
  imgUrl: String,
});

const Outlet = mongoose.model("Outlet", outletSchema);
module.exports = Outlet;
