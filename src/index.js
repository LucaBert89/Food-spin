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
let bigDishes = document.createElement("img");
bigDishes.classList.add("center-img");
let price = document.querySelector(".recipe-section__price");
let recipeTitle = document.querySelector(".recipe-section__title");
let recipe = document.querySelector(".recipe-section__text");
let btn = document.querySelector(".recipe-section__btn");
 
console.log(buttons);

let circleWidth = window.getComputedStyle(wheelDish).getPropertyValue("width");
let radius = parseInt(circleWidth) /2;

let rotationDegree = 0;
let i = 0;


(function init() {
    btnNext.addEventListener("click", rotation);
    btnprev.addEventListener("click", prev);
})();

console.log(window.getComputedStyle(btnNext).getPropertyValue("background-image"))

// big images and smallimages of the circle inside an array as they came from a database
let images = [
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
    ]

    function draw () {
        let degreePosition = -85;
        
        images.forEach(function(value ,index) {
            let smallDishes = document.createElement("div");
            smallDishes.classList.add("child");
            smallDishes.style.backgroundImage = value.smallImages;
            smallDishes.style.transform = `rotate(${degreePosition}deg) translate(${radius}px)`;
            wheelDish.appendChild(smallDishes);
            if(index == 0) {
                console.log(value.bigImages);
                bigDishes.src = value.bigImages;
                center.appendChild(bigDishes);
                text(value);
            }
            degreePosition += -36;
        }
        )
        for(i = 0; i<buttons.length; i++) {
            buttons[i].style.backgroundImage = `url(${buttonOrange})`;
        }
    }

    draw();


    
function setAnimation(value, e, rotate) {
    textSection.classList.remove("fadeleftin");
    value.classList.remove("fadeIn");
    textSection.classList.add("fadeleftout");
    value.classList.add("fadeOut");
    
    setTimeout(() => {
        if(e.target.getAttribute("data-slide") == "n") {
            if(i == images.length-1) {
                i = 0;
            } else {
                i++;
            }  
        } else {
            if(i == 0) {
                i = images.length-1;
            } else {
                i--;
            }  
        }
        buttonsColor();
        value.classList.add("fadeIn");
        textSection.classList.add("fadeleftin");
        textSection.classList.remove("fadeleftout");
        value.classList.remove("fadeOut");
        text(images[i]);
        
    },300);
    value.src = images[i].bigImages;
    wheelDish.style.transform = `rotate(${rotate}deg)`;
}


// rotation of the circle after the click of the button
function rotation(event) {
    rotationDegree += 36;
    setAnimation(bigDishes, event, rotationDegree);
}
 
function prev(event) {
    rotationDegree -= 36;
    setAnimation(bigDishes, event, rotationDegree);
}

function text (val) {
    price.innerText = val.price;
    recipeTitle.innerHTML = val.recipeTitle;
    recipe.innerHTML = val.recipe;
    if(price.className == "orange" && btn.className == "orange") {
        price.classList.remove("orange");
        btn.classList.remove("orange");
        price.classList.add("green");
        btn.classList.add("green");
    } else {
        btn.classList.remove("green");
        price.classList.remove("green");
        price.classList.add("orange");
        btn.classList.add("orange");
    }
}

function buttonsColor () {
    let btn = Array.from(buttons);
    btn.forEach(function(value) {
        console.log(value);
        if(value.getAttribute("data-color") == "O") {
            value.style.backgroundImage = `url(${buttonGreen})`
            value.removeAttribute("data-color");
        } else {
            value.style.backgroundImage = `url(${buttonOrange})`
            value.setAttribute("data-color", "O");
        }
        
    })
    
}