const express = require("express");

const validator = require("../Middlewares/validation/validate");
const controller = require("./../Controllers/reviewController");
const reviewValidator = require("../Middlewares/validation/reviewValidator");
const router = express.Router();

router
  .route("/reviews/:movieId")
  .get(controller.getAllMovieReviews)
  .post(controller.addNewReview);
  
router.route("/review/:reviewId")
.patch(controller.updateReview)
   .delete(controller.deleteReview);

//Admin
router.get("/reviews", controller.getAllReviews);

module.exports = router;
