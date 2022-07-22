// -------------------- Task #8 - working with time -----------------------

let clock = document.getElementById("clock");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let startBtn = document.getElementById("start_btn");
let stopBtn = document.getElementById("stop_btn");

const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();

hour.innerHTML = hours;
minute.innerHTML = minutes;
second.innerHTML = seconds;

hour.style.color = "red";
minute.style.color = "green";
second.style.color = "blue";
