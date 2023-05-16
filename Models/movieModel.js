const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  rate: Number,
  type: String, // movie , series
  category: [{ type: String }], // romance , action , ..
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "products" }],
  production_year: Number,
  trailer: String,
  poster: String,
  videos: String,
});

module.exports = mongoose.model("movies", schema);
