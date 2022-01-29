/** 
 * declare constants for DOM elements 
 * and possible choice 
 */

const boxes = document.getElementsByClassName("box");
const mole = document.getElementsById("mole");
const timer = document.getElementById("timer");
const score = document.getElementById("score");

let yourScore = 0;


function randomBox(){
    boxes.forEach(box => {
     box.classList.remove("mole");
    });

    let randomBox = boxes[Math.floor(Math.random() * 12)];
    randomBox.classList.add("mole");
}

function moveMole(){
    let timerId = null;
    timerId = setInterval(randomBox,500);
}
