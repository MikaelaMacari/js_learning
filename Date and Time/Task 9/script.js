// -------------------- Task #9 - date time -----------------------

let startBtn = document.getElementById("start_btn");
const settimer = () => {
  clearInterval(timer);

  let timer_day = document.getElementById("day").value;
  let timer_hour = document.getElementById("hour").value;
  let timer_min = document.getElementById("min").value;
  if (timer_day == "" && timer_hour == "") {
    document.getElementById("timer").innerHTML = "You Must Complete all Fields!";
  } else {
    let now = new Date();
    let timer_date = timer_day + " " + timer_hour + ":" + timer_min;
    let end = new Date(timer_date); // Arrange values in Date Time Format
    let second = 1000; // Total Millisecond In One Sec
    let minute = second * 60; // Total Sec In One Min
    let hour = minute * 60; // Total Min In One Hour
    let day = hour * 24; // Total Hour In One Day

    function showtimer() {
      let now = new Date(); // Get Current date time
      let remain = end - now; // Get The Difference Between Current and choosen date time
      if (remain < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Time Over!";
        return;
      }
      let days = Math.floor(remain / day); // Get Remaining Days
      let hours = Math.floor((remain % day) / hour); // Get Remaining Hours
      let minutes = Math.floor((remain % hour) / minute); // Get Remaining Minutes
      let seconds = Math.floor((remain % minute) / second); // Get Remaining Sec

      document.getElementById("timer").innerHTML = days + "Days ";
      document.getElementById("timer").innerHTML += hours + "Hrs ";
      document.getElementById("timer").innerHTML += minutes + "Mins ";
      document.getElementById("timer").innerHTML += seconds + "Secs";
    }
    timer = setInterval(showtimer, 1000); // Display Timer In Every 1 Sec
  }
};

startBtn.addEventListener("click", settimer);
