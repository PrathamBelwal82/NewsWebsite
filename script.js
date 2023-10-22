const API_KEY = "52579248825c47a986c0a9140aff59c8";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("INDIA"));

async function fetchNews(query) {
    const res = await fetch('${url}${query}&apiKey=${API_KEY}');
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardHolder = document.querySelector("cards-container");
    const newscardTemplate = document.querySelector("template-news");

    cardHolder.innerHTML = "";

    articles.forEach(article => {
        if (!articles.urltoImage) return;
        const cardClone = newscardTemplate.content.clonenode(true);
        fillinData(cardClone, article);
        cardHolder.appendChild(cardClone);
    });
}

function fillinData(cardClone,article){
    const newsImg=cardClone.querySelector("#news-img");
    
}