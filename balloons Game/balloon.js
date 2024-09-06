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

    let containerWidth = displayBalloons.clientWidth;
    let containerHeight = displayBalloons.clientHeight;

    // display random number of ballons
    for (let i = 1; i <= randomNum; i++) {

        // create div element 
        let item = document.createElement('span');
        //    add class the div 
        item.classList.add('balloon');
        item.classList.add(`m-${Math.round(Math.random() * 5)}`);
        item.classList.add(`p-${Math.round(Math.random() * 5)}`);
        item.classList.add(`ms-${Math.round(Math.random() * 5)}`);
        item.classList.add(`mt-${Math.round(Math.random() * 5)}`);
        item.classList.add(`mb-${Math.round(Math.random() * 5)}`);
        // add balloon in the div 
        item.innerText = `🎈`



        displayBalloons.appendChild(item)
    }



})

check.addEventListener('click', () => {


    if (input.value == randomNum) {
        msg.classList.remove('d-none');
        msg.classList.replace('alert-msg', 'alert-success');
        msg.classList.replace('alert-danger', 'alert-success');
        msg.classList.replace('alert-warning', 'alert-success');
        msg.innerText = "congratulation 🎉 You win"
        input.value = null;
    } else if (input.value == '') {

        msg.classList.remove('d-none');
        msg.classList.replace('alert-msg', 'alert-warning');
        msg.classList.replace('alert-danger', 'alert-warning');
        msg.classList.replace('alert-success', 'alert-warning');
        msg.innerText = "please enter value"
        input.value = null;
    } else {
        msg.classList.remove('d-none');
        msg.classList.replace('alert-msg', 'alert-danger');
        msg.classList.replace('alert-warning', 'alert-danger');
        msg.classList.replace('alert-success', 'alert-danger');
        msg.innerText = "WRONG ANSWER ! You Lose 😥"
        input.value = null;
    }


})