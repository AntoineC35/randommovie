const keyTMDB = "cc4deeed666ddf53c6829e7e89af8f69";
const tokenTMDB = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzRkZWVlZDY2NmRkZjUzYzY4MjllN2U4OWFmOGY2OSIsInN1YiI6IjY0NzcyOTVlMTJjNjA0MDBlMWRjOGViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WzioNlWeD9igUGz2pYXEDO1tHKj4qki0U6HKRPYwvQs"
const URLIMDB = ""
const main = document.querySelector(".container")


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzRkZWVlZDY2NmRkZjUzYzY4MjllN2U4OWFmOGY2OSIsInN1YiI6IjY0NzcyOTVlMTJjNjA0MDBlMWRjOGViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WzioNlWeD9igUGz2pYXEDO1tHKj4qki0U6HKRPYwvQs'
  }
};

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  
fetch('https://api.themoviedb.org/3/genre/movie/list', options)
    .then(response => response.json())
    .then(data => createList(data.genres))
    .catch(err => console.error(err));
    
function createList(data) {
    const select = document.querySelector(".genreSelector") || document.createElement("select")
    select.classList.add("select")
    data.forEach(function(genre) {
        const optionGenre = document.createElement("option");
        optionGenre.classList.add("genre")
        optionGenre.innerHTML = genre.name
        select.appendChild(optionGenre);
    })
    main.appendChild(select)
}