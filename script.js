// script.js
let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");
const displayMilliseconds = document.getElementById("milliseconds");
const lapList = document.getElementById("lapTimes");

function updateDisplay() {
  displayMilliseconds.textContent = milliseconds.toString().padStart(2, "0");
  displaySeconds.textContent = seconds.toString().padStart(2, "0");
  displayMinutes.textContent = minutes.toString().padStart(2, "0");
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      milliseconds += 1;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }
      updateDisplay();
    }, 10);
  }
}

function pauseTimer() {
  isRunning = false;
  clearInterval(timer);
}

function resetTimer() {
  isRunning = false;
  clearInterval(timer);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  updateDisplay();
  lapList.innerHTML = ""; // Clear lap times
}

function recordLap() {
  if (isRunning) {
    const lapTime = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
    const lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
  }
}

// Attach event listeners
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);
