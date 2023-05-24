const mongoose = require("mongoose");
const Movie = mongoose.model("movies");
const User = mongoose.model("users");
const Review = mongoose.model("reviews");

exports.getAllReviews = async function (request, response, next) {
  try {
    const allReviews = await Review.find({});
    if (!allReviews.length) throw new Error("No Reviews exist");
    response.status(200).json({ message: "Done", data: allReviews });
  } catch (error) {
    next(error);
  }
};

exports.getAllMovieReviews = async function (request, response, next) {
  try {
    let { movieId } = request.params;
    const allMovieReviews = await Review.find({ movie_id: movieId });
    if (!allMovieReviews.length) throw new Error("No Reviews exist");
    response.status(200).json({ message: "Done", data: allMovieReviews });
  } catch (error) {
    next(error);
  }
};

exports.addNewReview = async function (request, response, next) {
  try {
    let { user_id, content } = request.body;
    let { movieId } = request.params;
    let review = new Review({ user_id, movie_id: movieId, content });
    await review.save();
    response.status(201).json({ message: "Done", data: review });
  } catch (error) {
    next(error);
  }
};

exports.updateReview = async function (request, response, next) {
  try {
    let { reviewId } = request.params;
    let { user_id, content } = request.body;
    let review = await Review.findOneAndUpdate(
      { _id: reviewId, user_id },
      { content },
      { new: true }
    );

    if (!review) throw new Error("update failed");
    response.status(200).json({ message: "Done", date: review });
  } catch (error) {
    next(error);
  }
};

exports.deleteReview = async function (request, response, next) {
  try {
    let { reviewId } = request.params;
    let { user_id, isAdmin } = request.body;
    let obj = {_id:reviewId};
    if (!isAdmin) obj.user_id = user_id;
    let review = await Review.findOneAndDelete(obj);
    if (!review) throw new Error("delete failed");
    response.status(200).json({ message: "Done", date: review });
  } catch (error) {
    next(error);
  }
};
