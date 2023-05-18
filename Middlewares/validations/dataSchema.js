const { query, param, body } = require("express-validator");

//teacher Data: _id(objectID), fullname,password, email , image (which is string)
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

exports.patchTeacherArray = [
  body("_id")
    .notEmpty()
    .isMongoId()
    .withMessage("Invalid ID")
    .isLength({ min: 24, max: 24 })
    .withMessage("ID should be 24 characters long"),
  body("fullName")
    .optional()
    .isAlpha()
    .withMessage("fullName should be String"),
  body("password")
    .optional()
    .isString()
    .withMessage("password should be have Strong password"),
  body("email")
    .optional()
    .isEmail()
    .withMessage("please follow the example foo@bar.com"),
  body("image").optional().isString().withMessage("provide the url"),
];

// Child Data: _id(Number), fullName, age , level (one of PreKG,KG1,KG2), address(city,street and building)
exports.postChildArray = [
  body("fullName")
    .notEmpty()
    .isAlpha()
    .withMessage("fullName should be String"),
  body("age")
    .notEmpty()
    .isInt()
    .withMessage("age should be have Strong password"),
  body("level")
    .notEmpty()
    .isIn(["PreKG", "KG1", "KG2"])
    .withMessage("Level Should be one of PreKG,KG1,KG2"),
  body("address.city")
    .notEmpty()
    .isString()
    .withMessage("city should be string"),
  body("address.street")
    .notEmpty()
    .isString()
    .withMessage("street should be string"),
  body("address.building")
    .notEmpty()
    .isString()
    .withMessage("building should be string"),
];

exports.patchChildArray = [
  body("_id").notEmpty().isInt().withMessage("ID should be a Number"),
  body("fullName")
    .optional()
    .isAlpha()
    .withMessage("fullName should be String"),
  body("age")
    .optional()
    .isInt()
    .withMessage("age should be have Strong password"),
  body("level")
    .optional()
    .isIn(["PreKG", "KG1", "KG2"])
    .withMessage("Level Should be one of PreKG,KG1,KG2"),
  body("address.city")
    .optional()
    .isString()
    .withMessage("city should be string"),
  body("address.street")
    .optional()
    .isString()
    .withMessage("street should be string"),
  body("address.building")
    .optional()
    .isString()
    .withMessage("building should be string"),
];

// :_id(Number), name, supervisor (teacher id number), children which is array of children ids
exports.postClassArray = [
  body("name").notEmpty().isAlpha().withMessage("name should be String"),
  body("supervisor")
    .notEmpty()
    .isMongoId()
    .withMessage("Invalid ID")
    .isLength({ min: 24, max: 24 })
    .withMessage("ID should be 24 characters long"),
  body("children")
    .notEmpty()
    .isArray()
    .withMessage("My array must be an array")
    .custom((value) => {
      //Check that all elements are integers
      const allIntegers = value.every((element) => Number.isInteger(element));
      if (!allIntegers) {
        throw new Error("All elements in child array must be integers");
      }
      return true;
    }),
];

exports.patchClassArray = [
  body("_id").notEmpty().isInt().withMessage("ID should be a Number"),
  body("name").optional().isAlpha().withMessage("name should be String"),
  body("supervisor").optional().isInt().withMessage("ID should be integer"),
  body("children")
    .optional()
    .isArray()
    .withMessage("My array must be an array")
    .custom((value) => {
      // Check that all elements are integers
      const allIntegers = value.every((element) => Number.isInteger(element));
      if (!allIntegers) {
        throw new Error("All elements in child array must be integers");
      }
      return true;
    })
    .optional(),
];

exports.validateMongoIdParameter = [
  param("id")
    .notEmpty()
    .withMessage("ID shouldn't be Empty")
    .isMongoId()
    .withMessage("Invalid ID")
    .isLength({ min: 24, max: 24 })
    .withMessage("ID should be 24 characters long"),
];

exports.validateIntegerParameter = [
  param("id")
    .notEmpty()
    .withMessage("ID shouldn't be Empty")
    .isInt()
    .withMessage("ID should be 24 characters long"),
];

exports.loginArray = [
  body("email").isEmail().withMessage("please follow the example foo@bar.com"),
  body("password")
    .isString()
    .withMessage("password should be have Strong password"),
];
