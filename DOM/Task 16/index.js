const number = document.getElementById("number");
number.style.padding = "1rem";
number.style.width = "50px";
number.addEventListener("keyup", (e) => {
  e.target.value = e.target.value.replace(/[^\d]/g, "");
});
