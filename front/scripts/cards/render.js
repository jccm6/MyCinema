
console.log("HOLA JAVIER");
let cardGenerator = require ("./function.js");
// let urlMovies = "https://students-api.2.us-1.fl0.io/movies";
// require ("dotenv").config();
// console.log(process.env.API_URL);
let urlMovies = "https://henry-cinema.onrender.com/movies";
let axios = require ("axios");

// function movieIterator () {
//     $.get(urlMovies, (movies, status) => {
//         for (const movie of movies) {
//             cardGenerator(movie);
//         }
//     });
// }

// function movieIterator () {
//     axios.get(urlMovies)
//     .then (response => {
//      for (const movie of response.data) {
//     cardGenerator(movie);
//     }
// })
//     .catch (error =>alert(error.message))
// }

function movieIterator () {
    axios.get(urlMovies)
    .then (response => {
        response.data.map (movie => cardGenerator(movie))
    })
    .catch (error => alert(error.message))
}

movieIterator();




// console.log(tempData);
// tempData = [{...}, {...}]

// let cardContainer = document.getElementById("movies-card");
// let urlMovies = "https://students-api.2.us-1.fl0.io/movies";

// function cardGenerator( {title, year, director, duration, genre, rate, poster} ) {
//     //Crear carta
//     let cardDiv = document.createElement("div");
//     cardDiv.classList.add("col-xl-3", "col-lg-4", "col-sm-6", "grid-item", "grid-sizer", "cat-two");
//     //Poster
//     let posterCard = document.createElement("div");
//     posterCard.classList.add("movie-poster");
//     let posterCardA = document.createElement("img");
//     posterCardA.src = poster;
//     posterCardA.alt = title;
//     posterCard.appendChild(posterCardA);
//     cardDiv.appendChild(posterCard);
//     //Tarjeta de contenido
//     let contentCard = document.createElement("div");
//     contentCard.classList.add("movie-content");
//     cardDiv.appendChild(contentCard);
//     //Contenido Superior
//     let contentUpCard = document.createElement("div");
//     contentUpCard.classList.add("top");
//     contentCard.appendChild(contentUpCard);
//     //Titulo
//     let titleCard = document.createElement("h5");
//     titleCard.classList.add("title");
//     titleCard.innerText = title;
//     contentUpCard.appendChild(titleCard);
//     //Year
//     let yearCard = document.createElement("span");
//     yearCard.classList.add("date");
//     yearCard.innerText = year;
//     contentUpCard.appendChild(yearCard);
//     //Contenido Inferior
//     let contentDownCard = document.createElement("div");
//     contentDownCard.classList.add("bottom");
//     contentCard.appendChild(contentDownCard);
//     //Crear listado ul
//     let ulItem = document.createElement("div");
//     contentDownCard.appendChild(ulItem);
//     //Duracion
//     let durationCard = document.createElement("span");
//     durationCard.innerText = `Duración: ${duration} | `;
//     ulItem.appendChild(durationCard);
//     //Director
//     let directorCard = document.createElement("span");
//     directorCard.innerText = `Director: ${director} | `;
//     ulItem.appendChild(directorCard);
//     //Genero
//     let genreCard = document.createElement("span");
//     let genres = genre.join(", ");
//     genreCard.innerText = `Generos: ${genres} | `;
//     ulItem.appendChild(genreCard);
//     //Rate
//     let rateCard = document.createElement("span");
//     rateCard.innerText = `Valoración: ${rate}`;
//     ulItem.appendChild(rateCard);
//     //Agregar la carta a la sección
//     cardContainer.appendChild(cardDiv);
// }

// function movieIterator () {
//     $.get(urlMovies, (movies, status) => {
//         for (const movie of movies) {
//             cardGenerator(movie);
//         }
//     });
// }

// function movieIterator () {
//     for (const movie of tempData) {
//         cardGenerator(movie);
//     }
// }

// movieIterator();