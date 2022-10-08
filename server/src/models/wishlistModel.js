const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    type: { type: String, enum: ["OUTLET", "ITEM"] },
    userId: { type: String, required: true },
    itemOrOutletId: { type: String, required: true },
  },
  { timestamps: true }
);

const Wishlist = mongoose.model("Wishlist", schema);
module.exports = Wishlist;
