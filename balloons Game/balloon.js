let start = document.getElementById('start');
let input = document.getElementById('inputCheck');
let check = document.getElementById('check');
let displayBalloons = document.getElementById('display-ballons');
let msg = document.getElementById('message');



let randomNum;

// logic for add button 
start.addEventListener('click', () => {
    // remove exsting balloons 
    displayBalloons.innerHTML = '';
    // generate random number between 1 to 10 
    randomNum = Math.round(Math.random() * 10);

    let totalBalloons = ['Balloon_Red.png', 'Balloon_Green.png', 'Balloon_Pink.png', 'Balloon_Blue.png'];

    // display random number of ballons
    for (let i = 1; i <= randomNum; i++) {

        // create div element 
        let item = document.createElement('span');
        //    add class the div 
        // item.classList.add('balloon');
        item.classList.add(`m-${Math.round(Math.random() * 5)}`);
        item.classList.add(`p-${Math.round(Math.random() * 5)}`);
        item.classList.add(`ms-${Math.round(Math.random() * 5)}`);
        item.classList.add(`mt-${Math.round(Math.random() * 5)}`);
        item.classList.add(`mb-${Math.round(Math.random() * 5)}`);
        // add balloon in the div 
        // item.innerText = `🎈`
        item.innerHTML = `<img src="./${totalBalloons[Math.round(Math.random() * 3)]}" class="balloon" alt="${totalBalloons[Math.round(Math.random() * 3)]}">`

        // item.src = "./Balloon_Red.png";

        displayBalloons.appendChild(item)
    }



})

check.addEventListener('click', () => {

    alertMsg = ['d-none','alert-success','alert-danger','alert-warning'];

    if (input.value == randomNum) {
        msg.classList.remove(alertMsg[0],alertMsg[2] ,alertMsg[3]);
        msg.classList.add(alertMsg[1]);
        msg.innerText = "congratulation 🎉 You win"
        input.value = null;
    } else if (input.value == '') {

        msg.classList.remove(alertMsg[0],alertMsg[1] ,alertMsg[2]);
        msg.classList.add(alertMsg[3]);
        msg.innerText = "please enter value"
        input.value = null;
    } else {
        msg.classList.remove(alertMsg[0],alertMsg[1] ,alertMsg[3]);
        msg.classList.add(alertMsg[2]);
        msg.innerText = "WRONG ANSWER ! You Lose 😥"
        input.value = null;
    }
})