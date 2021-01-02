import "./main.scss";
import smallDish0 from "./assets/images/smalldishes/small-dish0.svg";
import smallDish1 from "./assets/images/smalldishes/small-dish1.svg";
import smallDish2 from "./assets/images/smalldishes/small-dish2.svg";
import smallDish3 from "./assets/images/smalldishes/small-dish3.svg";
import smallDish4 from "./assets/images/smalldishes/small-dish4.svg";
import smallDish5 from "./assets/images/smalldishes/small-dish5.svg";
import smallDish6 from "./assets/images/smalldishes/small-dish6.svg";
import smallDish7 from "./assets/images/smalldishes/small-dish7.svg";
import smallDish8 from "./assets/images/smalldishes/small-dish8.svg";
import smallDish9 from "./assets/images/smalldishes/small-dish9.svg";

import bigDish0 from "./assets/images/bigdishes/big-dish0.svg";
import bigDish1 from "./assets/images/bigdishes/big-dish1.svg";
import bigDish2 from "./assets/images/bigdishes/big-dish2.svg";
import bigDish3 from "./assets/images/bigdishes/big-dish3.svg";
import bigDish4 from "./assets/images/bigdishes/big-dish4.svg";
import bigDish5 from "./assets/images/bigdishes/big-dish5.svg";
import bigDish6 from "./assets/images/bigdishes/big-dish6.svg";
import bigDish7 from "./assets/images/bigdishes/big-dish7.svg";
import bigDish8 from "./assets/images/bigdishes/big-dish8.svg";
import bigDish9 from "./assets/images/bigdishes/big-dish9.svg";

import buttonOrange from "./assets/images/buttons/btnOrange.svg"; 
import buttonGreen from "./assets/images/buttons/btnGreen.svg"; 


const wheelDish = document.querySelector(".wheel-container__wheel");
const center = document.querySelector(".wheel-container__wheel-pivot");
const buttons = document.querySelector(".wheel-container__buttons").children;
const btnNext = document.querySelector(".wheel-container__button-next");
const btnprev = document.querySelector(".wheel-container__button-prev");
const textSection = document.querySelector(".recipe-section");

let price = document.querySelector(".recipe-section__price");
let recipeTitle = document.querySelector(".recipe-section__title");
let recipe = document.querySelector(".recipe-section__text");
let btnRecipe = document.querySelector(".recipe-section__btn");
const background = document.querySelector(".background");
let bigDishes = document.createElement("img");
bigDishes.classList.add("center-img");
// the width of the wheel and the radius
let circleWidth = window.getComputedStyle(wheelDish).getPropertyValue("width");
let radius = parseInt(circleWidth) /2;

let rotationDegree = 0;
let i = 0;

(function init() {
    btnNext.addEventListener("click", rotationNext);
    btnprev.addEventListener("click", rotationPrev);
})();



// big images and smallimages of the circle inside an array as they came from a database
const data = [
        {
            "price": "$32",
            "recipeTitle": "Green Goddess Chicken Salad",
            "recipe": "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
            "bigImages": `${bigDish0}`,
            "smallImages": `url(${smallDish0})`
        },
        {
            "price": "$35",
            "recipeTitle": "Asian Cucumber Salad",
            "recipe": "Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
            "bigImages": `${bigDish1}`,
            "smallImages": `url(${smallDish1})`
        },
        {
            "price": "$32",
            "recipeTitle": "Green Goddess Chicken Salad",
            "recipe": "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
            "bigImages": `${bigDish2}`,
            "smallImages":`url(${smallDish2})`
        },
        {
            "price": "$35",
            "recipeTitle": "Asian Cucumber Salad",
            "recipe": "Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
            "bigImages": `${bigDish3}`,
            "smallImages": `url(${smallDish3})`
        },
        {
            "price": "$32",
            "recipeTitle": "Green Goddess Chicken Salad",
            "recipe": "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
            "bigImages": `${bigDish4}`,
            "smallImages": `url(${smallDish4})`
        },
        {
            "price": "$35",
            "recipeTitle": "Asian Cucumber Salad",
            "recipe": "Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
            "bigImages": `${bigDish5}`,
            "smallImages": `url(${smallDish5})`
        },
        {
            "price": "$32",
            "recipeTitle": "Green Goddess Chicken Salad",
            "recipe": "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
            "bigImages": `${bigDish6}`,
            "smallImages": `url(${smallDish6})`
        },
        {
            "price": "$35",
            "recipeTitle": "Asian Cucumber Salad",
            "recipe": "Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
            "bigImages": `${bigDish7}`,
            "smallImages": `url(${smallDish7})`
        },
        {
            "price": "$32",
            "recipeTitle": "Green Goddess Chicken Salad",
            "recipe": "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
            "bigImages": `${bigDish8}`,
            "smallImages": `url(${smallDish8})`
        },
        {
            "price": "$35",
            "recipeTitle": "Asian Cucumber Salad",
            "recipe": "Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
            "bigImages": `${bigDish9}`,
            "smallImages": `url(${smallDish9})`
        }
    ];

//drawing the wheel taking as degree Position of the first circle at 85 degrees
    (function () {
        let degreePosition = -85;
        
        // for each element of the array create a small dish inside the wheel taking the small dish image inside the array
        data.forEach(function(value ,index) {
            let smallDishes = document.createElement("div");
            smallDishes.classList.add("child");
            smallDishes.style.backgroundImage = value.smallImages;
            // give to the dish the degree position and translate as the radius to set it on the wheel
            smallDishes.style.transform = `rotate(${degreePosition}deg) translate(${radius}px)`;
            wheelDish.appendChild(smallDishes);
            if(index == 0) {
                bigDishes.src = value.bigImages;
                center.appendChild(bigDishes);
                price.style.color = "#FF922C";
                btnRecipe.style.backgroundColor = "#FF922C";
                text(value);
            }
            // add -36 degree to set the dishes around the wheel with that distance from each others
            degreePosition += -36;
        }
        )
        // give to the buttons the right image as background
        Array.from(buttons).forEach(element => {element.style.backgroundImage = `url(${buttonOrange})`;})
    })();


    
function setAnimation(value, e, rotate) {
    // remove the fade in animation and add the fade out to make the element disappear

    textSection.classList.remove("fadeleftin");
    value.classList.remove("fadeIn");
    textSection.classList.add("fadeleftout");
    value.classList.add("fadeOut");
    // check the current element if n or p is pressed
    if(e.target.getAttribute("data-slide") == "n") {
        if(i == data.length-1) {
            i = 0;
        } else {
            i++;
        }  
    } else if (e.target.getAttribute("data-slide") == "p"){
        if(i == 0) {
            i = data.length-1;
        } else {
            i--;
        }  
    }
    // set a timeout, same time as the fade animation
    setTimeout(() => {
        /* call the buttons color function to change btn colors and then the fade out for 
        the current elemnent removing the fadein*/
        buttonsColor();
        value.classList.add("fadeIn");
        textSection.classList.add("fadeleftin");
        textSection.classList.remove("fadeleftout");
        value.classList.remove("fadeOut");
        // change alse the price, title, recipe text calling the text function
        text(data[i]);
        // changing the price, buttons and background color of the half circle
        
        if(price.style.color == "rgb(255, 146, 44)" && btnRecipe.style.backgroundColor == "rgb(255, 146, 44)" && window.getComputedStyle(background).getPropertyValue("background-color") == "rgb(255, 238, 222)") {
            styleColor("#54BF29");
            background.style.backgroundColor = "#EAFFE2";
        } else {
            styleColor("#FF922C");
            background.style.backgroundColor ="#FFEEDE";
        }
    },300);
    // assign to the current bigdishes the relative next or prev BigDish based on the i value
    value.src = data[i].bigImages;
    wheelDish.style.transform = `rotate(${rotate}deg)`;
}


// rotation of the circle after the click of the button
function rotationNext(event) {
    rotationDegree += 36;
    // call set animation function above passing bigDishes (the div), the event and the rotation
    setAnimation(bigDishes, event, rotationDegree);
}
 
function rotationPrev(event) {
    rotationDegree -= 36;
    setAnimation(bigDishes, event, rotationDegree);
}

function text (val) {
    price.innerText = val.price;
    recipeTitle.innerHTML = val.recipeTitle;
    recipe.innerHTML = val.recipe;
};

function buttonsColor () {
    let btn = Array.from(buttons);
    btn.forEach(function(value) {
        // change the buttons after click
        if(value.getAttribute("data-color") == "O") {
            value.style.backgroundImage = `url(${buttonGreen})`
            value.removeAttribute("data-color");
        } else {
            value.style.backgroundImage = `url(${buttonOrange})`
            value.setAttribute("data-color", "O");
        }
        
    });
}

function styleColor(color) {
    price.style.color = color;
    btnRecipe.style.backgroundColor = color;
}