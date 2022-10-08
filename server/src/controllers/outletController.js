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

const getById = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Outlet.findOne({ _id: id });
    res.send(result);
  } catch (e) {
    res.status(500).send(e.message);
  }
};


module.exports = { getAllOutlet, getById };
