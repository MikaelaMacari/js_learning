const container = document.getElementById("container");
const rows = document.querySelectorAll("tr");
const cells = document.querySelectorAll("td");

rows.forEach((row, i) => {
  cells.forEach((cell, j) => {
    if ((i + j) % 2 === 0) {
      cell.style.backgroundColor = "black";
    } else {
      cell.style.backgroundColor = "white";
    }
  });
});

// for (let i = 0; i < rows.length; i++) {
//   for (let j = 0; j < cells.length; j++) {
//     cells[i].style.backgroundColor += (i + j) % 2 === 0 ? "black" : "white";
//   }
// }
