const express = require("express");
const router = express.Router();
const passport = require("passport");

/* LOAD BRAND SCHEMA */
const Brand = require("../../models/Brand");

/* LOAD INPUT VALIDATION */
const validateBrandInput = require("../../validation/brand");

/* LOAD MIDDLEWARES */
const admin = require("../../middleware/admin");

/*
    @route      GET api/products/brands
    @desc       returns an array of all brands
    @access     Private
*/
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    Brand.find()
      .then(brands => res.json(brands))
      .catch(err => {
        errors.serverError = "Server Error";
        res.status(500).json(errors);
      });
  }
);

/*
    @route      POST api/products/brands
    @desc       Adds a new brand
    @access     Private
*/
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    /* VALIDATE INPUTS */
    const { errors, isValid } = validateBrandInput(req.body);
    if (!isValid) return res.status(400).json(errors);
    const { name } = req.body;
    const newBrand = new Brand({ name });
    newBrand
      .save()
      .then(brand => res.json(brand))
      .catch(err => {
        errors.serverError = "Server Error";
        res.status(500).json(errors);
      });
  }
);

/*
      @route      POST api/products/brands
      @desc       Edits an existing brand
      @access     Private
  */
router.post(
  "/:brand_id",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    /* VALIDATE INPUTS */
    const { errors, isValid } = validateBrandInput(req.body);
    if (!isValid) return res.status(400).json(errors);
    const { name } = req.body;
    const brandId = req.params.brand_id;

    Brand.findByIdAndUpdate(brandId, { $set: { name: name } })
      .then(updatedBrand => res.json(updatedBrand))
      .catch(err => {
        errors.serverError = "Server Error";
        res.status(500).json(errors);
      });
  }
);

/*
      @route      POST api/products/brands/:brand_id
      @desc       Edits an existing brand
      @access     Private
  */
router.delete(
  "/:brand_id",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    const brandId = req.params.brand_id;
    Brand.findByIdAndDelete(brandId)
      .then(removedBrand => res.json(removedBrand))
      .catch(err => {
        errors.serverError = "Server Error";
        res.status(500).json(errors);
      });
  }
);

/*
        @route      Get api/products/brands/add_all
        @desc       Adds a bulk of intial brands
        @access     Private
    */

router.get(
  "/add_all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const brands = require("../../initData/brands").brands;
    Brand.insertMany(brands)
      .then(docs => res.json(docs))
      .catch(err => res.send(err));
  }
);

module.exports = router;
