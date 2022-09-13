const User = require("../models/userModel.js")

const createUser = (req, res) => {
  res.send("WORKING");
};

const getAllUsers = (req, res) =>{
  res.send("GET WORKING");
}

module.exports = { createUser, getAllUsers };

