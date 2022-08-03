const listContainer = document.getElementById("listContainer");
const list = document.getElementById("list");
let inputValue = document.getElementById("name");
const addBtn = document.getElementById("addBtn");
addBtn.disabled = true;

const displayListItemValue = (item) => {
  alert(item.innerText);
};

const addNameToList = () => {
  let nameValue = "";
  nameValue = inputValue.value;
  const listItem = document.createElement("li");
  listItem.textContent = nameValue;
  listItem.addEventListener("click", () => {
    displayListItemValue(listItem);
  });
  list.appendChild(listItem);
  inputValue.value = nameValue;
  inputValue.value = "";
  addBtn.disabled = true;
};

inputValue.addEventListener("keyup", (e) => {
  if (e.target.value == "") {
    addBtn.disabled = true;
  } else {
    addBtn.disabled = false;
  }
});

addBtn.addEventListener("click", () => {
  addNameToList();
});
