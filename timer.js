const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 1500;
let interval;

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.textContent = 
    `${String(minutes).padStart(2, "0")}
    :
    ${String(seconds).padStart(2, "0")}`;


};

const startTimer = () => {

    if (isRunning) return;

    isRunning = true;
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if(timeLeft == 0){
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
            isRunning = false;
        }

    }, 1000);
};

const stopTimer = () => clearInterval(interval);

const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
    isRunning = false;
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

updateTimer();
