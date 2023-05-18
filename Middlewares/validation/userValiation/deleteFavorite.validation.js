const { body } = require("express-validator");

exports.deleteFavoriteValidation = [
  body("id")
    .notEmpty()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("ID must be a valid MongoDB ObjectId"),
];
