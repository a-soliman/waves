const express = require("express");
const router = express.Router();
const passport = require("passport");

/* LOAD PRODUCT SCHEMA */
const Product = require("../../models/Product");

/*
    @route      POST api/shop
    @desc       Returns a list of products filtered and skipped
    @access     Public
*/
router.post("/", (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let findArgs = {};

  for (let key in req.body.filters) {
    let filter = req.body.filters[key];

    if (filter.length > 0) {
      if (key === "price") {
        findArgs[key] = {
          $gte: filter[0],
          $lte: filter[1]
        };
      } else {
        findArgs[key] = filter;
      }
    }
  }

  Product.find(findArgs)
    .populate("brand")
    .populate("wood")
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, products) => {
      if (err) return res.status(400).send(err);
      console.log(products);
      res.json({
        size: products.length,
        products: products
      });
    });
});

module.exports = router;
