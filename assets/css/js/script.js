const boxes = document.getElementsByClassName('.box');
const mole = document.getElementsByClassName('.mole');
const timer = document.getElementById('#timer');

let yourScore = 0

function randomBox(){
    boxes.forEach(box => {
        box.classList.remove('.mole')
        
    })

    let randomBox = boxes[Math.floor(math.random() * 12)]
    randomBox.classList.add('.mole')

}

function moveMole(){
    let timerId = null
    timerId = setInterval(randomBox,800)
}