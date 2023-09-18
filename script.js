


let seconds = 0;
let tens = 0;
let interval;
let laps = [];

const displayTens = document.getElementById('tens');
const displaySeconds = document.getElementById('seconds');

let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');


buttonStart.onclick = () => {
    clearInterval(interval)
    interval = setInterval(runStopwatch, 10)
}

buttonStop.onclick = () => {
    clearInterval(interval)
}

buttonReset.onclick = () => {
    clearInterval(interval)
    tens = 0
    seconds = 0
    displayTens.innerHTML = `0${tens}`
    displaySeconds.innerHTML = `0${seconds}`
}


const runStopwatch = () => {
    tens++;
    if (Number(tens) <= 9) {
        displayTens.innerHTML = `0${tens}`;
    }

    if (Number(tens) > 9) {
        displayTens.innerHTML = tens;
    }

    if (Number(tens) > 99) {
        seconds++;
        displaySeconds.innerHTML = `0${seconds}`
        console.log(seconds)
        tens = 0
        displayTens.innerHTML = `0${tens}`
    }
    
    if (Number(seconds) > 9) {
        displaySeconds.innerHTML = seconds;
    }
}




