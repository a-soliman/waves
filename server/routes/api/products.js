const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");

/* LOAD MIDDLEWARES */
const admin = require("../../middleware/admin");

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
