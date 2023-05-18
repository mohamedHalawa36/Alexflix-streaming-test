const { body } = require("express-validator");

exports.addFavoriteValidation = [
  body("id")
    .notEmpty()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("ID must be a valid MongoDB ObjectId"),
  body("name")
    .notEmpty()
    .withMessage("Name cannot be empty")
    .isString()
    .withMessage("Name must be a string"),
];
