const { body } = require("express-validator");

const allowedGenders = ["male", "female"];
const minAge = 18;
const maxAge = 40;

exports.updateValidate = [
  body("firstName")
    .optional()
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters long"),

  body("lastName")
    .optional()
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 2 })
    .withMessage("Last name must be at least 2 characters long"),

  body("phone")
    .optional()
    .notEmpty()
    .withMessage("Phone number is required")
    .isMobilePhone("ar-EG")
    .withMessage("Invalid phone number")
    .isLength({ min: 11, max: 11 })
    .withMessage("Phone number must have 11 digits"),

  body("gender")
    .optional()
    .notEmpty()
    .withMessage("Gender is required")
    .isIn(allowedGenders)
    .withMessage(`Gender must be one of ${allowedGenders.join("-")}`),

  body("age")
    .optional()
    .notEmpty()
    .withMessage("Age is required")
    .isNumeric()
    .withMessage("Age must be a number")
    .toInt()
    .isInt({ min: minAge, max: maxAge })
    .withMessage(`Age must be between ${minAge} and ${maxAge}`),
];
