const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzRkZWVlZDY2NmRkZjUzYzY4MjllN2U4OWFmOGY2OSIsInN1YiI6IjY0NzcyOTVlMTJjNjA0MDBlMWRjOGViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WzioNlWeD9igUGz2pYXEDO1tHKj4qki0U6HKRPYwvQs'
    }
};

function fetchMoviecard() {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => showMovie(response.results))
        .catch(err => console.error(err));
}


function showMovie(data) {
    const divCards = document.querySelector(".divCards")
    
    for (let i = 0; i < 4; i++) {
        const movieTitle = data[i].title
        const moviePoster = `https://image.tmdb.org/t/p/original${data[i].poster_path}`
        const newArticle = document.createElement('article');
        newArticle.className = "cardMovie cardMovie-js";

        const newTitle = document.createElement('h3');
        newTitle.textContent = movieTitle;

        const newLink = document.createElement('a')
        newLink.href = "https://www.imdb.com/title/tt13751694/?ref_=hm_top_tt_t_1";

        const newBanner = document.createElement('img')
        newBanner.src = moviePoster
        newBanner.alt = "Affiche du film " + movieTitle ;

        newLink.appendChild(newBanner);
        newArticle.appendChild(newTitle);
        newArticle.appendChild(newLink);
        divCards.appendChild(newArticle);
    }
}


function showTrailer() {
    const section = document.querySelector(".trailer")

    const newArticle = document.createElement('article');
    newArticle.className = "mediaMovie mediaMovie-js";

    const newVideo = document.createElement('iframe');
    newVideo.src = "https://www.youtube.com/embed/Cj-6AYzO2qo";
    newVideo.width = "834";
    newVideo.height = "494";

    newArticle.appendChild(newVideo);
    section.appendChild(newArticle)
}

showTrailer()
fetchMoviecard()