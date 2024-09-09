// Common IDs
let displayBalloon = document.getElementById("display-balloons");
let startBtn = document.getElementById("start");
let inputField = document.getElementById("input");
let checkBtn = document.getElementById("check");
let message = document.getElementById("message");

// Table IDs
let score = document.getElementById("score");
let stage = document.getElementById("stage");
let winning = document.getElementById("winning");
let lose = document.getElementById("lose");

// Current table data
let currantWin = 0;
let currantLose = 0;
let currantScore = 0;
let currantStage = 1;

// Counter IDs
let counter = document.getElementById("counter");
let stopCountDown;
let countDownSecond = 30;
let countdownRunning = false;

// Modal variables
const victoryModelElm = document.getElementById('victoryModel');
const modalOne = new bootstrap.Modal(victoryModelElm);
const timeUpModelElm = document.getElementById('timeOutModel');
const modalSec = new bootstrap.Modal(timeUpModelElm);

// Random number variable
let randomNum;

let randomImgSrc = () => {
  let src = [
    "Balloon_Red.png",
    "Balloon_Blue.png",
    "Balloon_Green.png",
    "Balloon_Pink.png",
  ];
  return src[Math.floor(Math.random() * 4)];
};

// Main functions
let startGame = () => {
  countdownRunning = false; 
  const images = [
    "Balloon_Red.png",
    "Balloon_Blue.png",
    "Balloon_Green.png",
    "Balloon_Pink.png",
  ];

  images.forEach((image) => {
    const img = new Image();
    img.src = image;
  }); 
  generateBalloons();
  startCountDown();
  stageCheck();
};

let generateBalloons = () => {
  randomNum = Math.round(Math.random() * currantStage * 10);
  displayBalloon.innerHTML = "";

  for (let i = 1; i <= randomNum; i++) {
    let item = document.createElement("span");
    item.classList.add(`m-${Math.round(Math.random() * 5)}`);
    item.classList.add(`p-${Math.round(Math.random() * 3)}`);
    item.classList.add(`ms-${Math.round(Math.random() * 5)}`);
    item.classList.add(`mt-${Math.round(Math.random() * 5)}`);
    item.classList.add(`mb-${Math.round(Math.random() * 5)}`);

    const img = document.createElement("img");
    img.src = randomImgSrc();
    img.alt = randomImgSrc();
    img.className = "balloons";
    img.style.height = currantStage > 2 ? "60px" : "120px";

    item.appendChild(img);
    displayBalloon.appendChild(item);
  }
};

let checkResult = () => {
  message.classList.remove("alert-success", "alert-warning", "alert-danger", "alert-primary");

  if (inputField.value == randomNum) {
    message.classList.add("alert-success");
    message.innerText = "Congratulations! You win!";
    inputField.value = null;
    currantWin++;
    currantScore = currantWin * currantStage;
    winning.innerText = currantWin;
    score.innerText = currantScore;
    stageCheck();
    generateBalloons();
  } else if (inputField.value === "") {
    message.classList.add("alert-warning");
    message.innerText = "Please enter a value.";
    inputField.value = null;
    alert(randomNum)
  } else {
    message.classList.add("alert-danger");
    message.innerText = "WRONG ANSWER! You Lose!";
    inputField.value = null;
    currantLose++;
    currantScore--;
    lose.innerText = currantLose;
    score.innerText = currantScore;
    generateBalloons();
  }
};

let stageCheck = () => {
  if (currantWin >= currantStage * 5) {
    modalOne.show();
    clearInterval(stopCountDown);
    countdownRunning = false;
    currantStage++;
    currantWin = 0;
    stage.innerText = currantStage;
    counter.textContent = '00:00';
    countDownSecond = getCountDownTime(currantStage);
  }
};

function getCountDownTime(stage) {
  switch (stage) {
    case 1: return 30;
    case 2: return 35;
    case 3: return 40;
    case 4: return 45;
    case 5: return 50;
    default: return 30;
  }
}

function startCountDown() {
  if (countdownRunning) return;  
  countdownRunning = true;

  countDownSecond = getCountDownTime(currantStage);
  stopCountDown = setInterval(() => {
    if (countDownSecond > 0) {
      countDownSecond--;
      updateCountDown();
    } else {
      clearInterval(stopCountDown);
      counter.textContent = '00:00';
      modalSec.show();
      countdownRunning = false;
    }
  }, 1000);
}

function updateCountDown() {
  counter.textContent = 
    `${String(Math.floor(countDownSecond / 60)).padStart(2, '0')}:${String(countDownSecond % 60).padStart(2, '0')}`;
}

// Event listeners
startBtn.addEventListener("click", () => {
  clearInterval(stopCountDown); 
  countdownRunning = false;
  startGame();
});

checkBtn.addEventListener("click", () => checkResult());

document.getElementById('nextStage').addEventListener('click', () => {
  modalOne.hide();
  startCountDown(); 
});

victoryModelElm.addEventListener('hidden.bs.modal', () => {
  startCountDown();
});

timeUpModelElm.addEventListener('hidden.bs.modal', () => {
  window.location.reload();
});
