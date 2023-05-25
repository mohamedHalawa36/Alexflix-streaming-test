const mongoose = require("mongoose")
const { AutoIncrementID } = require("@typegoose/auto-increment");

const addressSchema = new mongoose.Schema(
  {
    city: {type:String,required:true},
    street: {type:String,required:true},
    building: {type:String,required:true},
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    _id: { type: Number, ref: "products" },
    name: {type:String,required:true},
    price: {type:Number,required:true},
    quantity: {type:Number,required:true},
  },
  { _id: false }
);

const schema = new mongoose.Schema({
  _id:Number,
  user_id:mongoose.Schema.Types.ObjectId,
  status: {type:String,match:/\b(pending|approved|cancelled|shipped)\b/ig,required:true},
  products: [{type:productSchema,required:true}],
  total_price: {type:Number,required:true},
  address: { type:addressSchema,required:true },
  contact_phone:{type:String,required:true,match:/\b(002)?0\d{10}\b/gm},
  notes: String, // if user want to give instruction of delivery
});

schema.plugin(AutoIncrementID, {startAt:1});
mongoose.model("orders", schema);
