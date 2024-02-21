let cardContainer = document.getElementById("movies-card");

function cardGenerator( {title, year, director, duration, genre, rate, poster} ) {
    //Crear carta
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("col-xl-3", "col-lg-4", "col-sm-6", "grid-item", "grid-sizer", "cat-two", "mb-4");
    //Poster
    let posterCard = document.createElement("div");
    posterCard.classList.add("movie-poster");
    let posterCardA = document.createElement("img");
    posterCardA.src = poster;
    posterCardA.alt = title;
    posterCard.appendChild(posterCardA);
    cardDiv.appendChild(posterCard);
    //Tarjeta de contenido
    let contentCard = document.createElement("div");
    contentCard.classList.add("movie-content");
    cardDiv.appendChild(contentCard);
    //Contenido Superior
    let contentUpCard = document.createElement("div");
    contentUpCard.classList.add("top");
    contentCard.appendChild(contentUpCard);
    //Titulo
    let titleCard = document.createElement("h5");
    titleCard.classList.add("title");
    titleCard.innerText = title;
    contentUpCard.appendChild(titleCard);
    //Year
    let yearCard = document.createElement("span");
    yearCard.classList.add("date");
    yearCard.innerText = year;
    contentUpCard.appendChild(yearCard);
    //Contenido Inferior
    let contentDownCard = document.createElement("div");
    contentDownCard.classList.add("bottom");
    contentCard.appendChild(contentDownCard);
    //Crear listado ul
    let ulItem = document.createElement("div");
    contentDownCard.appendChild(ulItem);
    //Duracion
    let durationCard = document.createElement("span");
    durationCard.innerText = `Duración: ${duration} | `;
    ulItem.appendChild(durationCard);
    //Director
    let directorCard = document.createElement("span");
    directorCard.innerText = `Director: ${director} | `;
    ulItem.appendChild(directorCard);
    //Genero
    let genreCard = document.createElement("span");
    let genres = genre.join(", ");
    genreCard.innerText = `Generos: ${genres} | `;
    ulItem.appendChild(genreCard);
    //Rate
    let rateCard = document.createElement("span");
    rateCard.innerText = `Valoración: ${rate}`;
    ulItem.appendChild(rateCard);
    //Agregar la carta a la sección
    cardContainer.appendChild(cardDiv);
}

module.exports = cardGenerator;