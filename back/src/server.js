const express = require ("express");
const cors = require("cors");
const morgan = require("morgan");
const movieRouter = require("./routes/movieRouter");
const app = express ();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/movies", movieRouter);

module.exports = app;