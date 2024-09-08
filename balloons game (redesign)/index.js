// common IDs
let displayBalloon = document.getElementById("display-balloons");
let startBtn = document.getElementById("start");
let inputField = document.getElementById("input");
let checkBtn = document.getElementById("check");
let message = document.getElementById("message");

//table IDs
let score = document.getElementById("score");
let stage = document.getElementById("stage");
let winning = document.getElementById("winning");
let lose = document.getElementById("lose");
let tip = document.getElementById("tip");

//currunt table data
let currantWin = 0;
let currantLose = 0;
let currantScore = 0;
let currantStage = 1;

//counter IDs
let counter = document.getElementById("counter");
let startCountDown;
let stopCountDown;
let updateCountDown;
let countDownSecond;
tip.innerText = `Win ${currantStage * 5} for next stage`;
//random number variable
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

// main functions
let startGame = () => {
  let stgBallon = currantStage * 10;
  randomNum = Math.round(Math.random() * stgBallon) + 1;

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

    item.appendChild(img);
    displayBalloon.appendChild(item);
  }
};
let checkResult = () => {
  message.classList.remove("alert-success");
  message.classList.remove("alert-warning");
  message.classList.remove("alert-danger");
  message.classList.remove("alert-primary");

  if (inputField.value == randomNum) {
    message.classList.add("alert-success");
    message.innerText = "congratulation 🎉 You win";
    input.value = null;
    currantWin++;
    currantScore = currantWin * 2;
    winning.innerText = currantWin;
    score.innerText = currantScore;
    stageCheck();
    startGame();
  } else if (inputField.value === "") {
    message.classList.add("alert-warning");
    message.innerText = "please enter value";
    input.value = null;
  } else {
    message.classList.add("alert-danger");
    message.innerText = "WRONG ANSWER ! You Lose 😥";
    input.value = null;
    currantLose++;
    currantScore = currantScore - 1;
    lose.innerText = currantLose;
    score.innerText = currantScore;
    startGame();
  }
};

let stageCheck = () => {
  if (currantStage * 5 - currantWin === 0) {
    tip.innerText = `Win ${currantStage * 5} for next stage`;
  } else {
    tip.innerText = `Win ${currantStage * 5 - currantWin} for next stage`;
  }
  if (currantWin == currantStage * 5) {
    currantStage++;
    currantWin = 0;
    stage.innerText = currantStage;
  }
};

startBtn.addEventListener("click", () => startGame());
checkBtn.addEventListener("click", () => checkResult());