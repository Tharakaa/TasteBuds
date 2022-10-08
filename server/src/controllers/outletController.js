const Outlet = require("../models/outletModel.js");
const Wishlist = require("../models/wishlistModel");

//get all
const getAllOutlet = async (req, res) => {
  let userId = req.query.userId;
  let wishlistIds = [];
  if (userId) {
    wishlistIds = await Wishlist.find({
      userId: userId,
      type: "OUTLET",
    }).select(["itemOrOutletId"]);
  }
  let result = await Outlet.find();
  let outlets = result.map((item) => {
    let itemTmp = JSON.parse(JSON.stringify(item));
    itemTmp["isInWishlist"] = false;
    wishlistIds.map((id) => {
      if (id.itemOrOutletId === itemTmp._id) {
        itemTmp["isInWishlist"] = true;
      }
    });
    return itemTmp;
  });
  res.send(outlets);
};

const getById = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Outlet.findOne({ _id: id });
    res.send(result);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const create = async (req, res) => {
  try {
    let body = req.body;
    let result = await new Outlet(body).save();
    res.send({ message: "success", res: result });
  } catch (e) {
    res.status(500).send(e);
  }
};

const deleteById = async (req, res) => {
  let id = req.params.id;
  let result = await Outlet.deleteOne({ _id: id });
  res.send(result);
};

module.exports = { getAllOutlet, getById, create, deleteById };
