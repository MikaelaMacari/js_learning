// // -------------------- Task #8 - working with time -----------------------

let startBtn = document.getElementById("start_btn");
let stopBtn = document.getElementById("stop_btn");

document.getElementById("hour").style.color = "red";
document.getElementById("minute").style.color = "green";
document.getElementById("second").style.color = "blue";
let waitTimer;

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = min;
  document.getElementById("second").innerHTML = sec;
}

function startClock() {
  stopClock();
  waitTimer = setInterval(showTime, 1000);
}

function stopClock() {
  clearInterval(waitTimer);
}
startBtn.addEventListener("click", startClock);
stopBtn.addEventListener("click", stopClock);
