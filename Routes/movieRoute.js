const express = require("express");

const validator = require("../Middlewares/validation/validate");
const controller = require("./../Controllers/movieController");
const movieValidator = require("../Middlewares/validation/movieValidator");
const router = express.Router();

router
  .route("/movies")
  .get(controller.getAllMovies)
  .post(movieValidator.movieArray, validator, controller.addNewMovie);

router
  .route("/movies/search")
  .get(movieValidator.searchMovieArray, validator, controller.searchMovie);

router
  .route("/movies/:id")
  .get(controller.getMovieById)
  .patch(movieValidator.movieArray, validator, controller.updateMovieById)
  .delete(controller.deleteMovieById);

module.exports = router;
