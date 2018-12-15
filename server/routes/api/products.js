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
router.get("/", (req, res) => {
  Product.find({})
    .then(products => res.json(products))
    .catch(err => {
      errors.serverError = "Internal server error.";
      res.status(500).json(errors);
    });
});

/*
    @route      GET api/products/:product_id
    @desc       Gets a product by id
    @access     Public
*/
router.get("/id/:product_id", (req, res) => {
  const productId = req.params.product_id;
  const errors = {};

  Product.findById(productId)
    .then(product => {
      if (!product) {
        errors.noFound = "Product was not found.";
        return res.status(404).json(errors);
      }
      res.json(product);
    })
    .catch(err => {
      errors.serverError = "Internal server error.";
      res.status(500).json(errors);
    });
});

/*
    @route      GET api/products/query
    @desc       Returns an array of sorted, ordered, with-limit products
    @access     Public
*/
router.get("/query", (req, res) => {
  const errors = {};

  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 100;

  Product.find()
    .populate("brand")
    .populate("wood")
    .sort([[sortBy, order]])
    .limit(limit)
    .exec()
    .then(products => res.json(products))
    .catch(err => {
      errors.serverError = "Internal server error.";
      res.status(500).json(errors);
    });
});

/*
    @route      Post api/products/
    @desc       Addes a new product
    @access     Private & admin
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
        errors.serverError = "Internal server error.";
        res.status(500).json(errors);
      });
  }
);

/*
    @route      Post api/products/:product_id
    @desc       Edits an existing product
    @access     Private & admin
*/
router.post(
  "/:product_id",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    /* VALIDATE INPUTS */
    const { errors, isValid } = validateProductInput(req.body);
    if (!isValid) return res.status(400).json(errors);

    const productId = req.params.product_id;
    const updates = { ...req.body };
    Product.findById(productId).then(product => {
      for (const updatedField in updates) {
        if (product[updatedField])
          product[updatedField] = updates[updatedField];
      }
      product
        .save()
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => {
          errors.serverError = "Internal server error.";
          res.status(500).json(errors);
        });
    });
  }
);

/*
    @route      DELETE api/products/:product_id
    @desc       Deletes a product from the DB
    @access     Private & admin
*/

router.delete(
  "/:product_id",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    const productId = req.params.product_id;

    Product.findByIdAndDelete(productId)
      .then(deletedProduct => res.json(deletedProduct))
      .catch(err => {
        errors.serverError = "Internal server error.";
        res.status(500).json(errors);
      });
  }
);

/*
    @route      GET api/products/add_all
    @desc       addes a bulk of products
    @access     Private / Admin
*/
router.get(
  "/add_all",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    const products = require("../../initData/products");
    Product.insertMany(products)
      .then(docs => res.json(docs))
      .catch(err => res.send(err));
  }
);

module.exports = router;
