const fs = require("fs")

const logger = (req, res, next) => {
  console.log("LOGGER");
  next();
};

module.exports = logger;
