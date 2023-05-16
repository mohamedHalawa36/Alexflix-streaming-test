const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  rate: Number,
  type: String,
  category: Array,
  products: Array,
  production_year: Number,
  trailer: String,
  poster: String,
  videos: Array,
});

module.exports = mongoose.model("movies", schema);
