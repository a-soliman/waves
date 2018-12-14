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

module.exports = router;
