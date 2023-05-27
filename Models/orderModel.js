const mongoose = require("mongoose");
// const { AutoIncrementID } = require("@typegoose/auto-increment");

const addressSchema = new mongoose.Schema(
  {
    city: String,
    street: String,
    building: Number,
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
    name: String,
    price: Number,
    quantity: Number,
  },
  { _id: false }
);

const schema = new mongoose.Schema({
  // _id: Number,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  status: {
    type: String,
    match: /\b(pending|approved|cancelled|shipped)\b/gi,
    default: "pending",
  },
  products: [{ type: productSchema }],
  total_price: Number,
  address: { type: addressSchema },
  contact_phone: { type: String /* match: /\b(002)?0\d{10}\b/gm*/ },
  notes: String,
  // if user want to give instruction of delivery
});

// schema.plugin(AutoIncrementID, { startAt: 1 });
mongoose.model("orders", schema);
