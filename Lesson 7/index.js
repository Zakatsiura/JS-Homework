//timer

const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.millisecond');

//buttons

const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');

// listeners

startButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})

pauseButton.addEventListener('click', () => {
    clearInterval(interval);
})

stopButton.addEventListener('click', () => {
    clearInterval(interval); clearAll();
})


// vars

let hour = 0, minute = 0, second = 0, millisecond = 0, interval;

function startTimer() {
    millisecond++;
    if(millisecond < 9) {
        millisecondElement.innerText = '0' + millisecond;
    }
    if(millisecond > 9) {
        millisecondElement.innerText = millisecond;
    }
    if(millisecond > 99) {
        second++;
        secondElement.innerText = '0' + second;
        millisecond = 0;
        millisecondElement.innerText = '0' + millisecond;
    }

    if(second < 9) {
        secondElement.innerText = '0' + second;
    }
    if(second > 9) {
        secondElement.innerText = second;
    }
    if(second > 59) {
        minute++;
        minuteElement.innerText = '0' + minute;
        second = 0;
        secondElement.innerText = '0' + second;
    }

    if(minute < 9) {
        minuteElement.innerText = '0' + minute;
    }
    if(minute > 9) {
        minuteElement.innerText = minute;
    }
    if(minute > 59) {
        hour++
        hourElement.innerText = '0' + hour;
        minute = 0;
        minuteElement.innerText = '0' + minute;
    }

    if(hour < 9) {
        hourElement.innerText = '0' + hour;
    }
    if(hour > 9) {
        hourElement.innerText = hour;
    }
    if(hour > 23) {
        hour++;
        hourElement.innerText = '0' + hour;
        hour = 0;
        hourElement.innerText = '0' + hour;
    }
}

function clearAll () {
    hour = 0; minute = 0; second = 0; millisecond = 0;
        hourElement.textContent = '00';
        minuteElement.textContent = '00';
        secondElement.textContent = '00';
        millisecondElement.textContent = '00';
}

// CLOCK


function clock() {
    const arrowH = document.querySelector('.hours');
    const arrowM = document.querySelector('.minutes');
    const arrowS = document.querySelector('.seconds');

    setInterval(() => {
        const day = new Date();

        const hours = day.getHours() * 30;
        const minutes = day.getMinutes() * 6;
        const seconds = day.getSeconds() * 6;

        arrowH.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
        arrowM.style.transform = `rotateZ(${minutes}deg)`;
        arrowS.style.transform = `rotateZ(${seconds}deg)`;

    })
}

clock()