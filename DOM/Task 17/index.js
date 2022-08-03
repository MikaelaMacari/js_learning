const elem = document.getElementById("elem");
let width = 150;
let height = 100;

elem.style.backgroundColor = "purple";
elem.style.width = `${width}px`;
elem.style.height = `${height}px`;

const calcWidthAndHeight = () => {
  alert(`WIDTH: ${width}\nHEIGHT: ${height}`);
  width = width * 2;
  height = height * 2;
  elem.style.width = `${width}px`;
  elem.style.height = `${height}px`;
};
elem.addEventListener("click", calcWidthAndHeight);
