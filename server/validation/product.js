const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.price = !isEmpty(data.price) ? data.price.toString() : "";
  data.brand = !isEmpty(data.brand) ? data.brand : "";
  data.shipping = !isEmpty(data.shipping) ? data.shipping.toString() : "";
  data.available = !isEmpty(data.available) ? data.available.toString() : "";
  data.wood = !isEmpty(data.wood) ? data.wood : "";
  data.frets = !isEmpty(data.frets) ? data.frets.toString() : "";
  data.publish = !isEmpty(data.publish) ? data.publish.toString() : "";

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

  if (!validator.isLength(data.description, { max: 10000 })) {
    errors.description = "Description field most contain a maximum of 10000.";
  }

  /* PRICE */
  if (validator.isEmpty(data.price)) {
    errors.price = "Price field is required";
  }

  /* BRAND */
  if (!validator.isMongoId(data.brand)) {
    errors.brand = "Brand must be of type objectId";
  }

  if (validator.isEmpty(data.brand)) {
    errors.brand = "Brand field is required.";
  }

  /* SHIPPING */
  if (!validator.isBoolean(data.shipping)) {
    errors.shipping = "Shipping value must be a boolean.";
  }

  if (validator.isEmpty(data.shipping)) {
    errors.shipping = "Shipping field is required.";
  }
  /* AVILABLE */
  if (!validator.isBoolean(data.available)) {
    errors.available = "Available value must be a boolean.";
  }

  if (validator.isEmpty(data.available)) {
    errors.available = "Available field is required.";
  }

  /* WOOD */
  if (!validator.isMongoId(data.wood)) {
    errors.wood = "Wood must be of type objectId";
  }

  if (validator.isEmpty(data.wood)) {
    errors.wood = "Wood field is required.";
  }

  /* FRETS */
  if (!validator.isNumeric(data.frets)) {
    errors.frets = "Frets value must be a number";
  }

  if (validator.isEmpty(data.frets)) {
    errors.frets = "Frets field is required.";
  }

  /* PUBLISH */
  if (!validator.isBoolean(data.publish)) {
    errors.publish = "Publish value must be a boolean.";
  }

  if (validator.isEmpty(data.publish)) {
    errors.publish = "Publish field is required.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
