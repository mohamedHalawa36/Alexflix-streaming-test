const { Router } = require("express");
const accountController= require("../Controllers/account.controller");
const validate = require("../Middlewares/validation/validate");
const checkEmail=require("../Middlewares/services/uniqueEmail");
const { forgetPasswordValidation } = require("../Middlewares/validation/accountValidation/forgetPassword.validation");
const { registerValidate } = require("../Middlewares/validation/accountValidation/register.validation");
const { LoginValidate } = require("../Middlewares/validation/accountValidation/login.validation");
const router=Router()




 router.post("/Register",checkEmail,registerValidate,validate,accountController.register)
 router.post("/Login",LoginValidate,validate,accountController.login)
 router.get("/confirmation/:id",accountController.confirmation)
router.get("/forgetPassword",accountController.forgetPassword) //sent email to get id
 router.patch("/forgetPassword/:id",forgetPasswordValidation,validate,accountController.forgetPasswordById) // add new password


module.exports = router