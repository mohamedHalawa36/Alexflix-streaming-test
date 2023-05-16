const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    city: String,
    street: String,
    building: String,
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
    name: String,
    price: Number,
    quantity: Number,
  },
  { _id: false }
);

const schema = new mongoose.Schema({
  status: String,
  user_id: mongoose.Schema.Types.ObjectId,
  products: [{ productSchema }],
  total_price: Number,
  address: { type: addressSchema },
  notes: String, // if user want to give instruction of delivery
});

mongoose.model("orders", schema);
