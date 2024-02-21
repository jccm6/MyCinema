let mongoose = require ("mongoose");

let movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: Number,
    director: String,
    duration: String,
    genre: [String],
    rate: Number,
    poster: {
        type: String,
        //*CUSTOM VALIDATOR
    },
    description: String,
});

let Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;