let startTime, updatedTime, difference, t;
let running = false;

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        t = setInterval(updateTime, 100);
        running = true;
    }
}

function stopTimer() {
    clearInterval(t);
    running = false;
}

function resetTimer() {
    clearInterval(t);
    difference = 0;
    running = false;
    document.getElementById("display").innerHTML = "00:00:00";
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById("display").innerHTML = hours + ":" + minutes + ":" + seconds;
}

document.getElementById("start").onclick = startTimer;
document.getElementById("stop").onclick = stopTimer;
document.getElementById("reset").onclick = resetTimer;
