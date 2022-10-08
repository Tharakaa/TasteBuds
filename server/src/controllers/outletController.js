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
