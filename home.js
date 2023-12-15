function showMovie(){
    const divCards = document.querySelector(".divCards")
    
    for (let i = 0; i < 4; i++) {
    
    const newArticle = document.createElement('article');
    newArticle.className= "cardMovie cardMovie-js";
    
    const newTitle = document.createElement('h3');
    newTitle.textContent='Film numéro 3';
    
    const newLink = document.createElement('a')
    newLink.href ="https://www.imdb.com/title/tt13751694/?ref_=hm_top_tt_t_1";
    
    const newBanner =document.createElement('img')
    newBanner.src ="https://m.media-amazon.com/images/M/MV5BN2ZjNDg4ZGQtZTY4NC00MWVmLTk4ZmEtYjc1NWRkZWRjMWUwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX140_CR0,0,140,209_AL_.jpg";
    newBanner.alt ="Affiche du film numéro 3";
    
    newLink.appendChild(newBanner);
    newArticle.appendChild(newTitle);
    newArticle.appendChild(newLink);
    divCards.appendChild(newArticle);
}
}

showMovie()


function showTrailer(){
    const section =document.querySelector(".trailer")
    
    const newArticle =document.createElement('article');
    newArticle.className="mediaMovie mediaMovie-js";
    
    const newVideo = document.createElement('iframe');
    newVideo.src="https://www.youtube.com/embed/Cj-6AYzO2qo";
    newVideo.width="834";
    newVideo.height="494";
    
    newArticle.appendChild(newVideo);
    section.appendChild(newArticle)
}
showTrailer()