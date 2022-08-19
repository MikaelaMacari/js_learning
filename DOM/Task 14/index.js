const parent = document.getElementById("parent");
const child = document.getElementById("child");
const removeBtn = document.getElementById("removeBtn");

const removeChild = () => {
  parent.removeChild(child);
};
removeBtn.addEventListener("click", removeChild);
