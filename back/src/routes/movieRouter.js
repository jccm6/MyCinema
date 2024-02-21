const express = require("express");
const movieRouter = express.Router();
const { getMovies, addMovies } = require("../controllers/movieController.js");

movieRouter.get("/", getMovies);
movieRouter.post("/", addMovies);

module.exports = movieRouter;