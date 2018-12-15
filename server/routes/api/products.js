const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");

/* LOAD PRODUCT SCHEMA */
const Product = require("../../models/Product");

/* LOAD MIDDLEWARES */
const admin = require("../../middleware/admin");

/* LOAD INPUT VALIDATION */
const validateProductInput = require("../../validation/product");

/*
    @route      GET api/products/test
    @desc       Tests products route
    @access     Public
*/
router.get("/test", (req, res) => {
  res.json({ msg: "products Works" });
});

/*
    @route      GET api/products/
    @desc       Returns an array of all products in DB
    @access     Public
*/

/*
    @route      GET api/products/:product_id
    @desc       Gets a product by id
    @access     Public
*/

/*
    @route      Post api/products/
    @desc       Addes a new product
    @access     Private
*/
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    /* VALIDATE INPUTS */
    const { errors, isValid } = validateProductInput(req.body);
    if (!isValid) return res.status(400).json(errors);

    const newProduct = new Product({ ...req.body })
      .save()
      .then(product => res.json(product))
      .catch(err => {
        errors.serverError = "Invalid server error.";
        res.status(500).json(errors);
      });
  }
);

/*
    @route      Post api/products/:product_id
    @desc       Edits an existing product
    @access     Private
*/

/*
    @route      DELETE api/products/:product_id
    @desc       Deletes a product from the DB
    @access     Private
*/

/*
    @route      GET api/products/add_all
    @desc       addes a bulk of products
    @access     Private / Admin
*/

module.exports = router;
