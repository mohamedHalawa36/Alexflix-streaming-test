const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  season: Number,
  episodes: [{ type: String }],
},{_id:false});
const schema = new mongoose.Schema({
  name: String,
  rate: Number,
  type: String, // movie , series
  description: String,
  category: [{ type: String }], // romance , action , ..
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "products" }],
  production_year: Number,
  trailer: String,
  poster_image: String,
  cover_image: String,
  videos: [videoSchema],
});

module.exports = mongoose.model("movies", schema);