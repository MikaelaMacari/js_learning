const number = document.getElementById("number");
number.style.padding = "1rem";
number.style.width = "50px";
number.addEventListener("blur", (e) => {
  if (isNaN(e.target.value)) {
    e.target.value = 0;
  }
});
