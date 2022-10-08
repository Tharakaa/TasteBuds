const Item = require("../models/itemModel.js");
const Wishlist = require("../models/wishlistModel");

//get all
const getAllItem = async (req, res) => {
  let id = req.params.outletId;
  let userId = req.query.userId;
  let wishlistIds = [];
  if (userId) {
    wishlistIds = await Wishlist.find({
      userId: userId,
      type: "ITEM",
    }).select(["itemOrOutletId"]);
  }
  let result = await Item.find({ outletId: id });
  let items = result.map((item) => {
    let itemTmp = JSON.parse(JSON.stringify(item));
    itemTmp["isInWishlist"] = false;
    wishlistIds.map((id) => {
      if (id.itemOrOutletId === itemTmp._id) {
        itemTmp["isInWishlist"] = true;
      }
    });
    return itemTmp;
  });
  res.send(items);
};

module.exports = { getAllItem };
