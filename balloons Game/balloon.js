
//model variables 
document.addEventListener('DOMContentLoaded', () => {

//todo display balloons variable
let displayBalloons = document.getElementById('display-ballons');

//todo start,input,check,message ids
let start = document.getElementById('start');
let input = document.getElementById('inputCheck');
let check = document.getElementById('check');
let msg = document.getElementById('message');

//todo score,stage,winning,lose,timelesf table ids
let score = document.getElementById('score');
let stage = document.getElementById('stage');
let winning = document.getElementById('winning');
let lose = document.getElementById('lose');
let timeLeft = document.getElementById('timeLeft');
let tip = document.getElementById('tip');


//todo model variable
 
const victoryModelElm = document.getElementById('victoryModel');
const modalOne = new bootstrap.Modal(victoryModelElm);
const timeUpModelElm = document.getElementById('timeOutModel');
const modalSec = new bootstrap.Modal(timeUpModelElm);
//todo global variables..
let stageCount = 1;
let winCount = 0;
let loseCount = 0;
// let timeLeftCount = 0;
let randomNum;

//assigning defult values
score.innerText = 0;
stage.innerText = stageCount;
winning.innerText = winCount;
lose.innerText = loseCount;
timeLeft.innerText = "00:00";





start.addEventListener('click', () => { startGame() })

check.addEventListener('click', () => { checkResult() })



// let timeRemaining = (stage) =>{

//      timeLeftCount = 60;
//     let intervalID = setInterval(() => {
//     timeLeft.innerText =  timeLeftCount;
//      if (timeLeftCount == 0) {

//     clearInterval(intervalID); // Cancels the interval
//   }
//   hs--;

// }, 1000);

// }


//define all function 

let startGame = () => {

    displayBalloons.innerHTML = '';


    // generate random number between 1 to 10 
    randomNum = Math.round(Math.random() * 10);

    let totalBalloons = ['Balloon_Red.png', 'Balloon_Green.png', 'Balloon_Pink.png', 'Balloon_Blue.png'];

    // display random number of ballons
    for (let i = 1; i <= randomNum; i++) {

        // create span element 
        let item = document.createElement('span');

        // item.classList.add('balloon');
        item.classList.add(`m-${Math.round(Math.random() * 5)}`);
        item.classList.add(`p-${Math.round(Math.random() * 5)}`);
        item.classList.add(`ms-${Math.round(Math.random() * 5)}`);
        item.classList.add(`mt-${Math.round(Math.random() * 5)}`);
        item.classList.add(`mb-${Math.round(Math.random() * 5)}`);

        // add balloon in the div 
        item.innerHTML = `<img src="./${totalBalloons[Math.round(Math.random() * 3)]}" class="balloon" alt="${totalBalloons[Math.round(Math.random() * 3)]}">`


        displayBalloons.appendChild(item)

    }
}

let checkResult = () => {
    alertMsg = ['d-none', 'alert-success', 'alert-danger', 'alert-warning'];

    if (input.value == randomNum) {
        msg.classList.remove(alertMsg[0], alertMsg[2], alertMsg[3]);
        msg.classList.add(alertMsg[1]);
        msg.innerText = "congratulation 🎉 You win"
        input.value = null;
        winCount++;
        winning.innerText = winCount;
        score.innerText = winCount * 2;
        displayBalloons.innerHTML = '';
        if (winCount == 5) {
            stageCount++;
            stage.innerText = stageCount;
        }
        showPopUp();
        startGame();
    } else if (input.value == '') {

        msg.classList.remove(alertMsg[0], alertMsg[1], alertMsg[2]);
        msg.classList.add(alertMsg[3]);
        msg.innerText = "please enter value"
        input.value = null;
    } else {
        msg.classList.remove(alertMsg[0], alertMsg[1], alertMsg[3]);
        msg.classList.add(alertMsg[2]);
        msg.innerText = "WRONG ANSWER ! You Lose 😥"
        input.value = null;
        loseCount++;
        lose.innerText = loseCount;
        displayBalloons.innerHTML = '';

    }
    
    
}


let showPopUp = () =>{
     
    if (winning.innerText == 5 ||
        winning.innerText == 10 ||
        winning.innerText == 15 ||
        winning.innerText == 20 ||
        winning.innerText == 25 ||
        winning.innerText == 30 ||
        winning.innerText == 35 ||
        winning.innerText == 40 ||
        winning.innerText == 50 
    ) {
        modalOne.show();
    }
}

 
//doc end
});