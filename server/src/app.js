const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRoute = require("./routers/user.js")
const outletRoute = require("./routers/outlet.js")
const itemRoute = require("./routers/item.js")

// configuration data by environment file
const PORT = process.env.PORT;
const DB_CONNECTION = process.env.DB_CONNECTION;

// create express server and set middlewares
const APP = express();
APP.use(cors());
APP.use(express.json());
APP.use("/api/users", userRoute);
APP.use("/api/outlets", outletRoute); 
APP.use("/api/items", itemRoute);

// mogodb database connection creation
mongoose.connect(DB_CONNECTION, () => {
  console.log(`The database is successfully connected`);
});

// express server connection creation
APP.listen(PORT, () => {
  console.log(`The server is successfully started on port ${PORT}`);
});

// defaul rout route handler
APP.get("**", (req, res) => {
  res.status(404).send("404 Route not found");
});
