const changeBackgroundColor = (color) => {
  document.body.style.backgroundColor = color;
};
// ----------------- Task 1 -----------------------
changeBackgroundColor("red");

// ----------------- Task 2 -----------------------

const setBacgroundColor = () => {
  setTimeout(() => {
    changeBackgroundColor("green");
  }, 3000);
};
setBacgroundColor();

// ----------------- Task 3 -----------------------
const setOrangeColor = () => {
  changeBackgroundColor("orange");
};
document.getElementById("orange").addEventListener("click", setOrangeColor);

// ----------------- Task 4 -----------------------
const list = document.getElementById("list");

const addElement = () => {
  const listItem = document.createElement("li");
  if (counter <= 20) {
    listItem.textContent = `Element ${counter}`;
    list.appendChild(listItem);
    counter++;
  }
  if (counter % 2 !== 0) {
    listItem.style.backgroundColor = "lightgreen";
  } else {
    listItem.style.backgroundColor = "purple";
  }
};
let counter = 1;
setInterval(() => {
  addElement();
}, 2000);
