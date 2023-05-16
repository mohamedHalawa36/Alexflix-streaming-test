const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  images: Array,
  colors: Array,
  available: Number,
  category: Array,
});

module.exports = mongoose.model("products", schema);
