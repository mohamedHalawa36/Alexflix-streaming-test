const express = require("express");

const dataSchema = require("./../Middlewares/validation/orderValidator");
const validator = require("./../Middlewares/validation/validate");
const controller = require("./../Controllers/orderController");
const router = express.Router();
//const {isRegisteredUser} = require("../Middlewares/Auth/authMWPremissions");
//const {isAdmin} = require("../Middlewares/Auth/authMWPremissions")

router
//User Tasks
  .route("/user/order")
//   .all(isRegisteredUser)
  .get(controller.getAllUserOrders)
  .post(dataSchema.addNewOrder,validator,controller.addNewOrder)
  .delete(dataSchema.deleteOrder,validator,controller.deleteOrderById)
  .patch(dataSchema.updateOrder,validator,controller.updateOrderById)
  //Admin Tasks
  router.route("/admin/order/")
  .get(/*isAdmin,*/controller.adminGetAllOrders)
  router.route("/admin/order/:id")
  //.all(isAdmin)
  .get(dataSchema.paramIntegerCheck,validator,controller.adminGetOrderById)
  .patch(dataSchema.paramIntegerCheck,validator,controller.adminUpdateOrderById)
  .delete(dataSchema.paramIntegerCheck,validator,controller.adminDeleteOrderById)
  
  router.route("/user/:id/order")
  .delete(/*isRegisteredUser,*/dataSchema.paramIntegerCheck,validator,controller.adminDeleteAllUserOrders)


module.exports = router;
