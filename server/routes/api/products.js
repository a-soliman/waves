const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../../models/User");
const Brand = require("../../models/Brand");
const Wood = require("../../models/Wood");
const keys = require("../../config/keys");

/* LOAD INPUT VALIDATION */
const validateBrandInput = require("../../validation/brand");
const validateWoodInput = require("../../validation/wood");

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

/**
 *  ::: BRAND ROUTES :::
 */

/*
    @route      GET api/products/brand
    @desc       returns an array of all brands
    @access     Private
*/
router.get(
  "/brands",
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
    @route      POST api/products/brand
    @desc       Adds a new brand
    @access     Private
*/
router.post(
  "/brand",
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
    @route      POST api/products/brand
    @desc       Edits an existing brand
    @access     Private
*/
router.post(
  "/brand/:brand_id",
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
    @route      POST api/products/brand
    @desc       Edits an existing brand
    @access     Private
*/
router.delete(
  "/brand/:brand_id",
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
      @route      Get api/products/brand/add_all
      @desc       Adds a bulk of intial brands
      @access     Private
  */

router.get(
  "/brands/add_all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const brands = require("../../initData/brands").brands;
    Brand.insertMany(brands)
      .then(docs => res.json(docs))
      .catch(err => res.send(err));
  }
);

/**
 *  ::: WOOD ROUTES :::
 */

/*
    @route      GET api/products/woods
    @desc       returns an array of all woods
    @access     Private
*/
router.get(
  "/woods",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    Wood.find()
      .then(woods => res.json(woods))
      .catch(err => {
        errors.serverError = "Server Error";
        res.status(500).json(errors);
      });
  }
);

/*
      @route      POST api/products/wood
      @desc       Adds a new wood
      @access     Private
  */
router.post(
  "/wood",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    /* VALIDATE INPUTS */
    const { errors, isValid } = validateWoodInput(req.body);
    if (!isValid) return res.status(400).json(errors);
    const { name } = req.body;
    const newWood = new Wood({ name });
    newWood
      .save()
      .then(wood => res.json(wood))
      .catch(err => {
        errors.serverError = "Server Error";
        res.status(500).json(errors);
      });
  }
);

/*
    @route      POST api/products/wood/:wood_id
    @desc       Edits an existing wood
    @access     Private
*/
router.post(
  "/wood/:wood_id",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    /* VALIDATE INPUTS */
    const { errors, isValid } = validateWoodInput(req.body);
    if (!isValid) return res.status(400).json(errors);
    const { name } = req.body;
    const woodId = req.params.wood_id;

    Brand.findByIdAndUpdate(woodId, { $set: { name: name } })
      .then(updatedWood => res.json(updatedWood))
      .catch(err => {
        errors.serverError = "Server Error";
        res.status(500).json(errors);
      });
  }
);

/*
      @route      DELETE api/products/wood/:wood_id
      @desc       Deletes an existing wood
      @access     Private
  */
router.delete(
  "/wood/:wood_id",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    const woodId = req.params.wood_id;
    Brand.findByIdAndDelete(woodId)
      .then(removedWood => res.json(removedWood))
      .catch(err => {
        errors.serverError = "Server Error";
        res.status(500).json(errors);
      });
  }
);

/*
      @route      Get api/products/wood/add_all
      @desc       Adds a bulk of intial woods
      @access     Private
  */

router.get(
  "/woods/add_all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const woods = require("../../initData/woods").woods;
    Wood.insertMany(woods)
      .then(docs => res.json(docs))
      .catch(err => res.send(err));
  }
);

module.exports = router;
