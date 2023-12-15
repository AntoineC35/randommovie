const keyTMDB = "cc4deeed666ddf53c6829e7e89af8f69";
const tokenTMDB = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzRkZWVlZDY2NmRkZjUzYzY4MjllN2U4OWFmOGY2OSIsInN1YiI6IjY0NzcyOTVlMTJjNjA0MDBlMWRjOGViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WzioNlWeD9igUGz2pYXEDO1tHKj4qki0U6HKRPYwvQs"
const main = document.querySelector(".container")
let searchResult;


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzRkZWVlZDY2NmRkZjUzYzY4MjllN2U4OWFmOGY2OSIsInN1YiI6IjY0NzcyOTVlMTJjNjA0MDBlMWRjOGViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WzioNlWeD9igUGz2pYXEDO1tHKj4qki0U6HKRPYwvQs'
  }
};

function fetchGenre() {
  fetch('https://api.themoviedb.org/3/genre/movie/list', options)
    .then(response => response.json())
    .then(data => createList(data.genres))
    .catch(err => console.error(err));
}

function createList(data) {
  const fSearchEngine = document.querySelector(".formSearch")
  const select = document.querySelector(".select")
  
  data.forEach(function(genre) {
    const optionGenre = document.createElement("option");
    optionGenre.classList.add("genre")
    optionGenre.id = genre.id
    optionGenre.value = genre.name
    optionGenre.innerHTML = genre.name
    select.appendChild(optionGenre);
  })
}

document.addEventListener("DOMContentLoaded", (event) => {
  fetchGenre();
  const btnSearch = document.querySelector(".btnSearch");
  const fSearchEngine = document.querySelector(".formSearch");

  btnSearch.addEventListener("click", function(event) {
    event.preventDefault();
    const formData = new FormData(fSearchEngine);
    const search = formData.get("genres");
    searchResult = search
    getMovieinfo()
  });
});



function getMovieinfo() {
  fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${searchResult}`, options)
    .then(response => response.json())
    .then(function(data) {
      randomMovieData(data.results);
    })
    .catch(err => console.error(err));
}

function randomMovieData(data) {
  let randomIndex = Math.floor(Math.random() * 20);
  const movieTitle = data[randomIndex].title;
  const movieSynopsis = data[randomIndex].overview;
  const posterMovie = `https://image.tmdb.org/t/p/original${data[randomIndex].poster_path}`
  console.log(posterMovie)
  createCards(movieTitle, movieSynopsis, posterMovie)
}

function createCards(movieTitle, movieSynopsis, posterMovie) {
  
  const cardRandom = document.querySelector(".cardRandom") || document.createElement("article")
  cardRandom.classList.add("cardRandom");
  const h3MovieTitle = document.querySelector(".movieTitle") || document.createElement("h2")
  h3MovieTitle.classList.add("movieTitle");
  h3MovieTitle.innerHTML = movieTitle;
  const pMovieSynopsis = document.querySelector(".movieSynopsis") || document.createElement("p");
  pMovieSynopsis.classList.add("movieSynopsis");
  pMovieSynopsis.innerHTML = movieSynopsis;
  const imgPosterMovie = document.querySelector(".posterMovie") || document.createElement("img")
  imgPosterMovie.classList.add("posterMovie")
  imgPosterMovie.src = posterMovie;
  imgPosterMovie.alt = `Poster du film ${movieTitle}`
  
  cardRandom.append(h3MovieTitle, pMovieSynopsis, imgPosterMovie);
  main.appendChild(cardRandom)
  
}