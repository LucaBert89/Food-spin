import "../main.scss";

export let bigDishes = document.createElement("img");
import {wheelDraw} from "./wheel.js";
wheelDraw();
import {setAnimation} from "./animation.js";
let rotationDegree = 0;

(function init() {
    const btnNext = document.querySelector(".wheel-container__button-next");
    const btnprev = document.querySelector(".wheel-container__button-prev");

    btnNext.addEventListener("click", rotationNext);
    btnprev.addEventListener("click", rotationPrev);
})();



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





