const express = require("express");

const dataSchema = require("./../Middlewares/validations/dataSchema");
const validator = require("./../Middlewares/validations/validatorMW");
const controller = require("./../Controllers/orderController");
const router = express.Router();

// router
//   .route("/orders")
//   .get(controller.getAllOrders)
//   .post(controller.addNewOrder)
//   .patch(controller.updateOrderById)
//   .delete(controller.deleteOrderById);

module.exports = router;
