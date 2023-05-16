const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  movie_id: mongoose.Schema.Types.ObjectId,
  content: String,
});

module.exports = mongoose.model("reviews", schema);
