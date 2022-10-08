const Outlet = require("../models/outletModel.js");

//get all
const getAllOutlet = async (req, res) => {
  try {
    let outlets = await Outlet.find().sort({ rating: "desc" });

    res.send(outlets);
  } catch (err) {
    return res.status(500).send(`Error: ${err.message}`);
  }
};

module.exports = { getAllOutlet };
