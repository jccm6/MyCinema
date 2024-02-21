console.log(tempData);
// tempData = [{...}, {...}]

let cardContainer = document.getElementById("movies-card");

function cardGenerator( {title, year, director, duration, genre, rate, poster} ) {
    let cardDiv = document.createElement("div");
    // cardDiv.className.add("movie-container");
    //Titulo
    let titleCard = document.createElement("a");
    titleCard.innerText = title;
    titleCard.href = "#";
    cardDiv.appendChild(titleCard);
    //Year
    let yearCard = document.createElement("h4");
    yearCard.innerText = year;
    cardDiv.appendChild(yearCard);
    //Director
    let directorCard = document.createElement("h4");
    directorCard.innerText = director;
    cardDiv.appendChild(directorCard);
    //Duracion
    let durationCard = document.createElement("h4");
    durationCard.innerText = duration;
    cardDiv.appendChild(durationCard);
    //Genero
    let genreCard = document.createElement("h4");
    let genres = genre.join(", ");
    genreCard.innerText = genres;
    cardDiv.appendChild(genreCard);
    //Rate
    let rateCard = document.createElement("h4");
    rateCard.innerText = rate;
    cardDiv.appendChild(rateCard);
    //Poster
    let posterCard = document.createElement("img");
    posterCard.src = poster;
    posterCard.alt = title;
    cardDiv.appendChild(posterCard);
    //Agregar la carta a la sección
    cardContainer.appendChild(cardDiv);
}

function movieIterator () {
    for (const movie of tempData) {
        cardGenerator(movie);
    }
}

movieIterator();