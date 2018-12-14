const express = require("express");
const router = express.Router();
const passport = require("passport");

/* LOAD Wppd SCHEMA */
const Wood = require("../../models/Wood");

/* LOAD INPUT VALIDATION */
const validateWoodInput = require("../../validation/wood");

/* LOAD MIDDLEWARES */
const admin = require("../../middleware/admin");

/*
    @route      GET api/products/woods
    @desc       returns an array of all woods
    @access     Private
*/
router.get(
  "/",
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
        @route      POST api/products/woods
        @desc       Adds a new wood
        @access     Private
    */
router.post(
  "/",
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
  "/:wood_id",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    /* VALIDATE INPUTS */
    const { errors, isValid } = validateWoodInput(req.body);
    if (!isValid) return res.status(400).json(errors);
    const { name } = req.body;
    const woodId = req.params.wood_id;

    Wood.findByIdAndUpdate(woodId, { $set: { name: name } })
      .then(updatedWood => res.json(updatedWood))
      .catch(err => {
        errors.serverError = "Server Error";
        res.status(500).json(errors);
      });
  }
);

/*
        @route      DELETE api/products/woods/:wood_id
        @desc       Deletes an existing wood
        @access     Private
    */
router.delete(
  "/:wood_id",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    const woodId = req.params.wood_id;
    Wood.findByIdAndDelete(woodId)
      .then(removedWood => res.json(removedWood))
      .catch(err => {
        errors.serverError = "Server Error";
        res.status(500).json(errors);
      });
  }
);

/*
        @route      Get api/products/woods/add_all
        @desc       Adds a bulk of intial woods
        @access     Private
    */

router.get(
  "/add_all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const woods = require("../../initData/woods").woods;
    Wood.insertMany(woods)
      .then(docs => res.json(docs))
      .catch(err => res.send(err));
  }
);

module.exports = router;
