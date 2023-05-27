const mongoose = require("mongoose");

const Order = mongoose.model("orders");
const User = mongoose.model("users");
const Product = mongoose.model("products");

module.exports.getAllUserOrders = function (req, res, next) {
  let tokenId = req.body.user_id;
  Order.find({ user_id: tokenId })
    .then((data) => {
      if (data.length != 0) res.status(200).json({ message: "Done", data });
      else throw new Error("there is no orders yet");
    })
    .catch((error) => next(error));
};
module.exports.addNewOrder = async function (req, res, next) {
  try {
    let { products } = req.body;
    // Ensure ids are correct
    let productsFound = await Product.find(
      { _id: { $in: products } },
      { available: 1 }
    );

    if (productsFound.length !== products.length)
      throw new Error("there are some ids don't exit");

    //Ensure the quantity is available
    const filteredProducts = productsFound.filter((product) => {
      const desiredQuantity = products.find(
        (p) => p._id === product._id.toString()
      ).quantity;
      return product.available >= desiredQuantity;
    });

    if (filteredProducts.length !== products.length)
      throw new Error("there are some products don't has the quantity");

    const newOrder = new Order({
      user_id: req.body.user_id,
      products: req.body.products,
      total_price: req.body.total_price,
      address: req.body.address,
      contact_phone: req.body.contact_phone,
    });

    await newOrder.save();

    // decrement the quantity from the availability
    const finalResult = [];

    for (const product of filteredProducts) {
      const desiredQuantity = products.find(
        (p) => p._id === product._id.toString()
      ).quantity;

      const updatedProduct = await Product.findByIdAndUpdate(
        product._id,
        {
          $inc: { available: -desiredQuantity },
        },
        { new: true }
      );

      finalResult.push(updatedProduct);
    }

    res.status(201).json({ message: "Done", newOrder });
  } catch (error) {
    next(error);
  }
  //
};

//waiting for isUser func decide
module.exports.updateOrderById = async function (req, res, next) {

  try {
    let {
      _id,
      user_id,
      address,
      contact_phone,
    } = req.body;

    const data = await Order.findOneAndUpdate(
      { _id, user_id },
      {
        contact_phone,
        "address.city": address?.city,
        "address.street": address?.street,
        "address.building": address?.building,
      },
      { new: true }
    );
    res.status(200).json({ message: "Done", data });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteOrderById = function (req, res, next) {
  let { user_id, id } = req.body;

  Order.findOneAndUpdate(
    { _id: id, user_id },
    {
      $set: { status: "cancelled" },
    }
  )
    .then((data) => {
      if (!data) throw new Error("Order Doesn't exist");
      res.status(200).json(data);
    })
    .catch((error) => next(error));
};

module.exports.adminGetAllOrders = function (req, res, next) {
  Order.find()
    .then((data) => {
      if (!data) throw new Error("there is no orders placed yet");
      res.status(200).json(data);
    })
    .catch((error) => next(error));
};

module.exports.adminGetOrderById = function (req, res, next) {
  Order.findById(req.params.id)
    .then((data) => {
      if (!data) throw new Error("Order Doesn't Exist");
      res.status(200).json(data);
    })
    .catch((error) => next(error));
};

module.exports.adminDeleteOrderById = function (req, res, next) {
  Order.findByIdAndUpdate(req.params.id, {
    $set: { status: "cancelled" },
  })
    .then((data) => {
      if (!data) throw new Error("Order Doesn't Exist");
      res.status(200).json(data);
    })
    .catch((error) => next(error));
};
module.exports.adminUpdateOrderById = function (req, res, next) {
  Order.findByIdAndUpdate(req.params.id, {
    $set: { status: "approved" },
  })
    .then((data) => {
      if (!data) throw new Error("Order Doesn't Exist");
      res.status(200).json(data);
    })
    .catch((error) => next(error));
};
// module.exports.adminDeleteAllUserOrders = function(req,res,next){

//   Order.deleteMany({user_id:req.params.id})
//     .then((data)=>{
//         if(!data) throw new Error("User dosen't have Orders")
//         res.status(200).json(data)
//     })
//     .catch(error=>next(error))
// }
