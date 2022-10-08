const Wishlist = require("../models/wishlistModel");
const Item = require("../models/itemModel");
const async = require("async");
const Outlet = require("../models/outletModel");

const getWishlistItem = async (req, res) => {
  try {
    let id = req.params.userId;
    let type = req.query.type.toUpperCase();
    let wishlistItems = await Wishlist.find({ userId: id, type: type }).select([
      "itemOrOutletId",
    ]);
    let items = await async.map(wishlistItems, async (item) => {
      let res1;
      if (type === "OUTLET") {
        res1 = await Outlet.findOne({ _id: item.itemOrOutletId });
      } else {
        res1 = await Item.findOne({ _id: item.itemOrOutletId });
      }
      if (res1) {
        res1 = JSON.parse(JSON.stringify(res1));
        res1.wishlistId = item._id;
        return res1;
      } else {
        return {};
      }
    });
    res.send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const addToWishlist = async (req, res) => {
  let existsObj = await Wishlist.findOne({
    userId: req.body.userId,
    itemOrOutletId: req.body.itemOrOutletId,
  });
  if (existsObj) {
    existsObj.delete();
    return res.send({ message: "success", res: existsObj });
  }
  let response = await new Wishlist(req.body).save();
  res.send({ message: "success", res: response });
};

const removeWishlistItem = async (req, res) => {
  let id = req.params.id;
  let result = await Wishlist.deleteOne({ _id: id });
  res.send(result);
};

const getWishlistItemAndOutletIds = async (req, res) => {
  let userId = req.params.userId;
  let result = await Wishlist.find({ userId: userId });
  let finalObj = { outletIds: [], itemIds: [] };
  result.map((item) => {
    if (item.type === "OUTLET") {
      finalObj.outletIds.push(item.itemOrOutletId);
    } else {
      finalObj.itemIds.push(item.itemOrOutletId);
    }
  });
  res.send(finalObj);
};

module.exports = {
  addToWishlist,
  getWishlistItem,
  removeWishlistItem,
  getWishlistItemAndOutletIds
};
