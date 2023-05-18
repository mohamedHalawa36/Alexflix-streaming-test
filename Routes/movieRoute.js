const express = require("express");

const validator = require("../Middlewares/validation/validate");
const controller = require("./../Controllers/movieController");
const dataSchema = require("../Middlewares/validation/dataSchema");
const router = express.Router();

router
  .route("/movies")
  .get(controller.getAllMovies)
  .post(dataSchema.movieArray, validator, controller.addNewMovie);

router
  .route("/movies/search")
  .get(dataSchema.searchMovieArray, validator, controller.searchMovie);

router
  .route("/movies/:id")
  .get(controller.getMovieById)
  .patch(dataSchema.movieArray, validator, controller.updateMovieById)
  .delete(controller.deleteMovieById);

module.exports = router;
