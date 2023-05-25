const express = require("express");

const validator = require("../Middlewares/validation/validate");
const controller = require("./../Controllers/productController");
const productValidator = require("../Middlewares/validation/productValidator");
const { multerData, formats } = require("../Middlewares/services/multer");

const router = express.Router();

multerData;

router
  .route("/products")
  .get(controller.getAllProducts)
  .post(
    multerData(formats.imageFormats).array("img"),
    productValidator.productArray,
    validator,
    controller.createProduct
  );

router.route("/products/search").get(controller.searchProduct);

router
  .route("/products/:id")
  .get(productValidator.handlingWithId, validator, controller.getProductById)
  .patch(
    productValidator.updatingArray,
    validator,
    controller.updateProductById
  )
  .delete(
    productValidator.handlingWithId,
    validator,
    controller.deleteProductById
  );

module.exports = router;
