let tempData = require("./tempData.js");
// console.log(tempData);
// tempData = [{...}, {...}]

// - SLIDER PRINCIPAL - //

function cardGeneratorSlider1( {title, year, director, duration, genre, rate, poster} ) {
    //Titulo
    let titleSlider = document.getElementById("title_slider1");
    titleSlider.innerText = title;
    // infoSlider.href = "#";
    // let cardDiv = document.createElement("div");
    // cardDiv.className.add("movie-container");
    // let titleCard = document.createElement("a");
    // cardDiv.appendChild(titleCard);
    //Genero
    let genreSlider = document.getElementById("genre_slider1");
    let genresnew = genre.join(", ");
    genreSlider.innerText = genresnew;
    //Director
    let directorSlider = document.getElementById("director_slider1");
    directorSlider.innerText = director
    //Year
    let yearSlider = document.getElementById("year_slider1");
    yearSlider.innerText = year;
    //Duration
    let durationSlider = document.getElementById("duration_slider1");
    durationSlider.innerText = duration;
    //Poster
    let posterSlider = document.getElementById("img_slider1");
    posterSlider.src = poster;

}

function movieIteratorSlider () {
    for (const movie of tempData) {
        cardGeneratorSlider1(movie);
    }
}

movieIteratorSlider();
