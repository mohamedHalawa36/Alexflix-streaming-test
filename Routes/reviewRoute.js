const express = require("express");

const dataSchema = require("./../Middlewares/validations/dataSchema");
const validator = require("./../Middlewares/validations/validatorMW");
const controller = require("./../Controllers/reviewController");
const router = express.Router();

// router
//   .route("/reviews")
//   .get(controller.getAllReviews)
//   .post(controller.addNewReview)
//   .patch(controller.updateReviewById)
//   .delete(controller.deleteReviewById);

module.exports = router;
