import {data} from "./data.js"; 
import buttonOrange from "../assets/images/buttons/btnOrange.webp"; 
import {bigDishes} from "./button.js";


export const buttons = document.querySelector(".wheel-container__buttons").children;
export const wheelDish = document.querySelector(".wheel-container__wheel");
const center = document.querySelector(".wheel-container__wheel-pivot");

// left side of the website with price and repice
export const price = document.querySelector(".recipe-section__price");
const recipeTitle = document.querySelector(".recipe-section__title");
const recipe = document.querySelector(".recipe-section__text");
export const btnRecipe = document.querySelector(".recipe-section__btn");


export function wheelDraw () {
      // the width of the wheel and the radius
    let circleWidth = window.getComputedStyle(wheelDish).getPropertyValue("width");
    let radius = parseInt(circleWidth)/2;
    let degreePosition = -85;

    // for each element of the array create a small dish inside the wheel taking the small dish image inside the array
    data.forEach(function(value ,index) {
        bigDishes.classList.add("center-img");
        let smallDishes = document.createElement("div");
        smallDishes.classList.add("smallImage");
        smallDishes.style.backgroundImage = value.smallImages;
        
        // give to the dish the degree position and translate as the radius to set it on the wheel
        smallDishes.style.transform = `rotate(${degreePosition}deg) translate(${radius}px)`;
        wheelDish.appendChild(smallDishes);
        //drawing the first big image displayed
        if(index == 0) {
          createBigImage(value);
        }
        // add -36 degree to set the dishes around the wheel with that distance from each others
        degreePosition += -36;
    }
    )
    // give to the buttons the right image as background
    Array.from(buttons).forEach(element => {element.style.backgroundImage = `url(${buttonOrange})`;})
};

function createBigImage(currentBig) {
    bigDishes.src = currentBig.bigImages;
    bigDishes.alt = currentBig.photoAlt;
    center.appendChild(bigDishes);
    price.style.color = "#FF922C";
    btnRecipe.style.backgroundColor = "#FF922C";
    text(currentBig);
}

export function text (val) {
    price.innerText = val.price;
    recipeTitle.innerHTML = val.recipeTitle;
    recipe.innerHTML = val.recipe;
};