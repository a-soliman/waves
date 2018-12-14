const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WoodSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxLength: 100
  }
});

module.exports = Wood = mongoose.model("woods", WoodSchema);
