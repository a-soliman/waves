const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.brand = !isEmpty(data.brand) ? data.brand : "";
  data.shipping = !isEmpty(data.shipping) ? data.shipping : "";
  data.available = !isEmpty(data.available) ? data.available : "";
  data.wood = !isEmpty(data.wood) ? data.wood : "";
  data.frets = !isEmpty(data.frets) ? data.frets : "";
  data.publish = !isEmpty(data.publish) ? data.publish : "";

  /* NAME */
  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!validator.isLength(data.name, { min: 2, max: 100 })) {
    errors.name =
      "Name field most contain minimum of 2 chars and maximum of 100.";
  }

  /* DESCRIPTION */
  if (validator.isEmpty(data.description)) {
    errors.description = "description field is required";
  }

  /* PRICE */
  /* BRAND */
  /* SHIPPING */
  /* AVILABLE */
  /* WOOD */
  /* FRETS */
  /* PUBLISH */

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
