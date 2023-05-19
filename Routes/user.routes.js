const { Router } = require("express");
const userController = require("../Controllers/user.controller");
const { multerData, formats } = require("../Middlewares/services/multer");
const validate = require("../Middlewares/validation/validate");
const {
  updateValidate,
} = require("../Middlewares/validation/userValiation/update.validation");
const { authorization } = require("../Middlewares/auth");
const {
  forgetPasswordValidation,
} = require("../Middlewares/validation/accountValidation/forgetPassword.validation");
const {
  addValidate,
} = require("../Middlewares/validation/userValiation/add.validation");
const moviesExists = require("../Middlewares/services/moviesExists");
const {
  addFavoriteValidation,
} = require("../Middlewares/validation/userValiation/addFavorite.validation");
const {
  deleteFavoriteValidation,
} = require("../Middlewares/validation/userValiation/deleteFavorite.validation");

const router = Router();

router
  .route("/user")
  .get(userController.getUserData)
  // .post(authorization,addValidate,validate,userController.addUser)    //send mail to user Admin
  .post(userController.addUser)
  .patch(updateValidate, validate, userController.updateUser)
  .delete(userController.deleteUser);

router
  .route("/user/favorites")
  .get(userController.getFavoritesUser)
  .patch(
    moviesExists,
    addFavoriteValidation,
    validate,
    userController.addFavoritesUser
  )
  .delete(
    deleteFavoriteValidation,
    validate,
    userController.deleteFavoritesUser
  );

router.patch(
  "/user/changePassword",
  forgetPasswordValidation,
  validate,
  userController.changePasswordUser
);

router.patch(
  "/user/ProfileImg",
  multerData(formats.imageFormats).single("img"),
  userController.addProfileImgForUser
);

/*
Admin
*/

// router.get("/users", authorization, userController.getAllUsers);
router.get("/users", userController.getAllUsers);

router.get(
  "/users/favorites",
  authorization,
  userController.getAllFavoritesUsers
);

router.get(
  "/users/favorites/:id",
  authorization,
  userController.getFavoritesUserById
);

router
  .route("/users/:id")
  .all(authorization)
  .get(userController.getUserById)
  .delete(userController.softDeleteUser); //softDeleteUser

module.exports = router;
