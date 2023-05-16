const mongoose = require("mongoose");

const product_img = new Schema(
  {
    public_id: String,
    secure_url: String,
  },
  { _id: false }
);

const schema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  images: [{ product_img }],
  colors: [{ type: String }],
  available: Number,
  category: String, // enum [keywords,....]
});

module.exports = mongoose.model("products", schema);
