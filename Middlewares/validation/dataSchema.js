const { param, body } = require("express-validator");

exports.movieArray = [
  body("name").optional().isString().withMessage("name should be String"),
  body("rate").optional().isNumeric().withMessage("rate should be number"),
  body("type").optional().isString().withMessage("type should be String"),
  body("category").optional().isArray().withMessage("category should be Array"),
  body("products").optional().isArray().withMessage("products should be Array"),
  body("production_year")
    .optional()
    .isNumeric()
    .withMessage("production_year should be Number"),
  body("trailer").optional().isString().withMessage("trailer should be String"),
  body("poster").optional().isString().withMessage("poster should be String"),
  body("videos").optional().isString().withMessage("videos should be String"),
];

exports.searchMovieArray = [
  param("name").optional().isString().withMessage("name should be String"),
  param("rate").optional().isNumeric().withMessage("rate should be number"),
  param("type").optional().isString().withMessage("type should be String"),
  param("production_year")
    .optional()
    .isNumeric()
    .withMessage("production_year should be Number"),
];
