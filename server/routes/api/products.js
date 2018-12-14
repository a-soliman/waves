const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../../models/User");
const Brand = require("../../models/Brand");
const keys = require("../../config/keys");

/* LOAD INPUT VALIDATION */
const validateBrandInput = require("../../validation/brand");

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

module.exports = router;
