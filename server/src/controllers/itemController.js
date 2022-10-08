const Item = require("../models/itemModel.js");

//get all
const getAllItem = async (req, res) => {
  let outletIda = req.params.outletId;
  try {
    let items = await Item.find({ outletId: outletIda }).sort({
      rating: "desc",
    });

    res.send(items);
  } catch (err) {
    return res.status(500).send(`Error: ${err.message}`);
  }
};

module.exports = { getAllItem };
