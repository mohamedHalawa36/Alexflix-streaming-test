const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    city: String,
    street: String,
    building: String,
  },
  { _id: false }
);

const schema = new mongoose.Schema({
  status: String,
  user_id: mongoose.Schema.Types.ObjectId,
  products: Array,
  total_price: Number,
  address: { type: addressSchema },
});

mongoose.model("orders", schema);
