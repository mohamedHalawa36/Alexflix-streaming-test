const mongoose = require("mongoose");
require("../Models/orderModel");
require("../Models/userModel");
require("../Models/productModel");

const Order = mongoose.model("orders");
const User = mongoose.model("users");
const Product = mongoose.model("products")


module.exports.getAllUserOrders = function (req, res, next) {
  let tokenId = req.body.id
  Order.find({ user_id: tokenId })
  .then((data) => {
      if (data.length != 0) res.status(200).json(data);
      else throw new Error("there is no orders yet");
    })
    .catch((error) => next(error));
};
module.exports.addNewOrder = function (req, res, next) {
  
  let tokenId = req.body.user_id
  //Authenication check
  //let tokenId = req.decodedToken.id;
    // if(tokenId == req.body.user_id){
            //put all code in here
    //}
    let productIds=[]
    let products = req.body.products.sort((a,b)=>{
      if(a._id>b._id) return 1;
      else if(a._id<b._id) return -1
      else return 0
    })

     products.forEach((product)=>{
        productIds.push(product._id)
     })
  
        //check for products existance
     Product.find({_id:{$in:productIds}},{available:1}).sort({_id:1})
                                 
      .then((data)=>{
        if(data.length == productIds.length){
              
          for(let i=0;i<data.length;i++){
                  //check for products availability
              if(products[i].quantity > data[i].available)
                    throw new Error(`there is no available quantity for ${products[i].name} product`)
                }

      //creating order after passing all checks
          let object = {  
            user_id: req.body.user_id,
            status: "pending",
            products: req.body.products,
            total_price: req.body.total_price,
            address:req.body.address,
            contact_phone: req.body.contact_phone,
          };
          return new Order(object).save()

      
    }else throw new Error("products not exist")
    
  })
  .then((data)=>{
    res.status(201).json(data)
  })
  .catch(error=>next(error))

};
//waiting for isUser func decide
module.exports.updateOrderById = function (req, res, next) {
  let {id,user_id,address,contact_phone}=req.body
  Order.findOne({_id:id,user_id},{user_id:1,"address":1,"contact_phone":1})
  .then((data)=>{
    if(!data) throw new Error("Order doesn't exist")
    if(address && contact_phone){
      data.address = address
      data.contact_phone = contact_phone
      return data.save()
    }
    else if(address){
      data.address = address
      return data.save()
    }
    else if(contact_phone){
      data.contact_phone = contact_phone
      return data.save() 
    }
    else{
      throw new Error("no data sent")
    }
  })
  .then((data)=>{

    res.status(200).json({data});
  })
  .catch(error=>next(error))
  
};
module.exports.deleteOrderById = function (req, res, next) {
  let {user_id,id} = req.body

   Order.findOneAndUpdate({_id:id,user_id},{
      $set:{status:"cancelled"}
    })
    .then((data)=>{
      if(!data) throw new Error("Order Doesn't exists")
      res.status(200).json(data)
    })
    .catch(error=>next(error))
  }
  
  
  

module.exports.adminGetAllOrders = function(req,res,next){

  Order.find()
  .then((data)=>{
    if(!data) throw new Error("there is no orders placed yet")
    res.status(200).json(data)
  })
  .catch(error=>next(error))
}
module.exports.adminGetOrderById = function(req,res,next){

  Order.findById(req.params.id)
  .then((data)=>{
    if(!data) throw new Error("Order Doesn't Exist")
    res.status(200).json(data)
  })
  .catch(error=>next(error))
}
module.exports.adminDeleteOrderById = function(req,res,next){

  Order.findByIdAndUpdate(req.params.id,{
    $set:{status:"cancelled"}
  })
  .then((data)=>{
    if(!data) throw new Error("Order Doesn't Exist")
    res.status(200).json(data)
  })
  .catch(error=>next(error))
}
module.exports.adminUpdateOrderById = function(req,res,next){

  Order.findByIdAndUpdate(req.params.id,{
    $set:{status:"approved"}
  })
  .then((data)=>{
    if(!data) throw new Error("Order Doesn't Exist")
    res.status(200).json(data)
  })
  .catch(error=>next(error))
}
module.exports.adminDeleteAllUserOrders = function(req,res,next){

  Order.deleteMany({user_id:req.params.id})
    .then((data)=>{
        if(!data) throw new Error("User dosen't have Orders")
        res.status(200).json(data)
    })
    .catch(error=>next(error))
}