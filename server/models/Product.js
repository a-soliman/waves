const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 100
    },
    description: {
      type: String,
      required: true,
      maxLength: 10000
    },
    price: {
      type: Number,
      required: true,
      maxLength: 255
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "brands",
      required: true
    },
    shipping: {
      required: true,
      type: Boolean
    },
    available: {
      required: true,
      type: Boolean
    },
    wood: {
      type: Schema.Types.ObjectId,
      ref: "woods",
      required: true
    },
    frets: {
      required: true,
      type: Number
    },
    sold: {
      type: Number,
      maxLength: 100,
      default: 0
    },
    publish: {
      type: Boolean,
      required: true
    },
    images: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

module.exports = Product = mongoose.model("products", ProductSchema);
