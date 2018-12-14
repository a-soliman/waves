const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";

  if (!validator.isLength(data.name, { max: 100 })) {
    errors.password = "Brand name must contain a maximum of 100 chars.";
  }

  if (validator.isEmpty(data.name)) {
    errors.name = "Brand Name field is required.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
