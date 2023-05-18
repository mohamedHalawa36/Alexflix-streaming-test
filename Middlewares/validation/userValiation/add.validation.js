const { body } = require("express-validator");

const allowedGenders = ["male", "female"];
const minAge = 18;
const maxAge = 40;

exports.addValidate = [
  body("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters long"),

  body("lastName")
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 2 })
    .withMessage("Last name must be at least 2 characters long"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address")
  ,
  body("phone")
    .notEmpty()
    .withMessage("Phone number is required")
    .isMobilePhone("ar-EG")
    .withMessage("Invalid phone number")
    .isLength({ min: 11, max: 11 })
    .withMessage("Phone number must have 11 digits"),

  body("gender")
    .notEmpty()
    .withMessage("Gender is required")
    .isIn(allowedGenders)
    .withMessage(`Gender must be one of ${allowedGenders.join("-")}`),

  body("age")
    .notEmpty()
    .withMessage("Age is required")
    .isNumeric()
    .withMessage("Age must be a number")
    .toInt()
    .isInt({ min: minAge, max: maxAge })
    .withMessage(`Age must be between ${minAge} and ${maxAge}`),
    
    body('isAdmin').notEmpty().withMessage('isAdmin is required')
    .isBoolean().withMessage('isAdmin must be a true or false')

];
