const parents = document.querySelectorAll(".parent");
const child = document.querySelector(".child");

//drag functions

const dragStart = function () {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
};

const dragEnd = function () {
  this.className = "child";
};
const dragOver = function (e) {
  e.preventDefault();
};
const dragEnter = function (e) {
  e.preventDefault();
  this.className += " hovered";
};
const dragLeave = function () {
  this.className = "parent";
};
const dragDrop = function () {
  this.className = "parent";
  this.appendChild(child);
};

//child listeners
child.addEventListener("dragstart", dragStart);
child.addEventListener("dragend", dragEnd);

//parent listeners
for (const parent of parents) {
  parent.addEventListener("dragover", dragOver);
  parent.addEventListener("dragenter", dragEnter);
  parent.addEventListener("dragleave", dragLeave);
  parent.addEventListener("drop", dragDrop);
}
