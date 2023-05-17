const express = require("express");

const dataSchema = require("./../Middlewares/validations/dataSchema");
const validator = require("./../Middlewares/validations/validatorMW");
const controller = require("./../Controllers/movieController");
const router = express.Router();

router
  .route("/movies")
  .get(controller.getAllMovies)
  .post(controller.addNewMovie);

router.route("/movies/search").get(controller.searchMovie);

router
  .route("/movies/:id")
  .get(controller.getMovieById)
  .patch(controller.updateMovieById)
  .delete(controller.deleteMovieById);

module.exports = router;
