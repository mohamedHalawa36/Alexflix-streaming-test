const { Router } = require("express");
const userController = require("../controllers/user.controller");
const { multerData ,formats} = require("../middleWares/services/multer");
const validate = require("../Middlewares/validation/validate");
const { updateValidate } = require("../Middlewares/validation/userValiation/update.validation");
const { authorization } = require("../Middlewares/auth");
const { forgetPasswordValidation } = require("../Middlewares/validation/accountValidation/forgetPassword.validation");
const { addValidate } = require("../Middlewares/validation/userValiation/add.validation");
const router=Router()




router.route("/user")   
.get(userController.getUserData)
.post(authorization,addValidate,validate,userController.addUser)    //send mail to user Admin
.patch(updateValidate,validate,userController.updateUser)
.delete(userController.deleteUser)

router.route("/user/favorites")
.get(userController.getAllFavoritesUsers)
.patch(userController.addFavoritesUser)
.delete(userController.deleteFavoritesUser)

router.patch("/user/changePassword",forgetPasswordValidation,validate,userController.changePasswordUser)

router.patch("/user/ProfileImg",multerData(formats.imageFormats).single("img"),userController.addProfileImgForUser)


/*
Admin
*/

router.get("/users",authorization,userController.getAllUsers)


router.get("/users/favorites",authorization,userController.getAllFavoritesUsers)

router.get("/users/favorites/:id",authorization,userController.getFavoritesUserById)

router.route("/users/:id")
.all(authorization)
.get(userController.getUserById)
.delete(userController.softDeleteUser)  //softDeleteUser


module.exports = router