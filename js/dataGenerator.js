"use strict";
import data from "../data.json" assert {type: "json"};

const container = document.querySelector(".categories-wrapper");
const categorie = document.createElement("div");
const categoryTitle = document.createElement("h2");
const categoryIcon = document.createElement("i");
const titleWrapper = document.createElement("div");
const scoreWrapper = document.createElement("div");
const scoreDisplay = document.createElement("h2");
const scoreDecoration = document.createElement("p");

categorie.classList.add("category-fancy");
categoryTitle.classList.add("category-title");
categoryIcon.classList.add("category-icon");
titleWrapper.classList.add("category_title-wrapper");
scoreWrapper.classList.add("category_score-wrapper");
scoreDecoration.classList.add("category-decoration");

scoreDecoration.innerHTML = ("/ 100");

for(var i = 0; i < (data.length); i++) 
{

    categorie.setAttribute("data-id", (data[i].category));
    categoryTitle.innerHTML = (data[i].category);
    categoryIcon.style = ("--background-url: url(" + data[i].icon + ");");
    scoreDisplay.innerHTML = (data[i].score);
    scoreWrapper.appendChild(scoreDisplay);
    scoreWrapper.appendChild(scoreDecoration);
    titleWrapper.appendChild(categoryIcon);
    titleWrapper.appendChild(categoryTitle);
    categorie.appendChild(titleWrapper);
    categorie.appendChild(scoreWrapper);
    container.appendChild(categorie.cloneNode(true));
}