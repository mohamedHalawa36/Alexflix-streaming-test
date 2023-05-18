const { body } = require("express-validator");

exports.forgetPasswordValidation = [
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*])[a-zA-Z\d!@#$%&*]{5,}$/
    )
    .withMessage(
      "Password must contain uppercase letter, lowercase letter, number, and one of the special characters "
    )
];
