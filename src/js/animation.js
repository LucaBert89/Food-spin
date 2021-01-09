import {data} from "./data.js";
import buttonGreen from "../assets/images/buttons/btnGreen.webp"; 
import {buttons, wheelDish, price, btnRecipe} from "./wheel.js";
import buttonOrange from "../assets/images/buttons/btnOrange.webp"; 
import {text} from "./wheel.js";

const textSection = document.querySelector(".recipe-section");
const background = document.querySelector(".background");
let i = 0;

export function setAnimation(value, e, rotate) {
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
        /* call the buttons color function to change btn colors */
        buttonsColor();

       /* and then remove the fade out for the current element adding fade in for the next*/
        value.classList.add("fadeIn");
        textSection.classList.add("fadeleftin");
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