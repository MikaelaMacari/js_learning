const container = document.getElementById("container");
const rows = document.querySelectorAll("tr");

const drawChessBoard = () => {
  rows.forEach((row, rowIdx) => {
    const cells = row.querySelectorAll("td");
    cells.forEach((cell, cellIdx) => {
      if ((rowIdx + cellIdx) % 2 === 0) {
        cell.style.backgroundColor = "black";
      } else {
        cell.style.backgroundColor = "white";
      }
    });
  });
};
drawChessBoard();
