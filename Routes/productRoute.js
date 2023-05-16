const express = require("express");

const dataSchema = require("./../Middlewares/validations/dataSchema");
const validator = require("./../Middlewares/validations/validatorMW");
const controller = require("./../Controllers/productController");
const router = express.Router();

// router
//   .route("/products")
//   .get(controller.getAllProducts)
//   .post(controller.addNewProduct)
//   .patch(controller.updateProductById)
//   .delete(controller.deleteProductById);

module.exports = router;
