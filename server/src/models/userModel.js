const mongoose = require("mongoose");

const schema = new mongoose.Schema({ name: "string", size: "string" });
const User = mongoose.model("User", schema);

module.exports = User;
