const express = require("express");
const Product = require("../models/itemModel");
const router = express.Router();

//add a new product
router.post("/", async (req, res) => {
    if (

      !req.body.title ||
      !req.body.description ||
      !req.body.price 
      
    ) {
      return res.status(400).send("Please fill the all values");
    }
    let newproduct = new Product({
      
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      qty: req.body.qty,
      outlet: req.body.outlet,
      imagePath: req.body.imagePath,
      
    });
    try {
      newproduct = await newproduct.save();
      return res.status(200).send(newproduct);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  module.exports = router;

  //delete
router.delete("/:id", async (req, res) => {
    try {
      let product = await Product.findOneAndDelete({ _id: req.params.id });
      console.log(product);
      if (!product)
        return res
          .status(404)
          .send("The Product you request to delete does not exist in DB");
  
      return res.status(200).send(product);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  //get all the product  
router.get("/", async (req, res) => {
    try {
      let products = await Product.find();
      return res.status(200).send(products);
    } catch (ex) {
      return res.status(500).send(ex.message);
    }
  });

  //get a one product with id 
router.get("/:id", async (req, res) => {
    console.log(req.params.id);
    try {
      let product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).send("The product you request does not exist");
      }
      return res.status(200).send(product);
    } catch (ex) {
      return res.status(500).send(ex.message);
    }
  });