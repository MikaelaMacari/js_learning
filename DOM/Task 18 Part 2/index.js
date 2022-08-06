const viewport = document.getElementById("viewport");
const player2 = document.getElementById("player2");
let moveBy = 0;

player2.style.left = 0;
player2.style.top = 0;

const movePlayer = (event, player) => {
  switch (event.key) {
    case "ArrowRight":
      moveBy += 2;
      player.style.left = moveBy + "px";
      if (moveBy > 448) {
        moveBy -= 2;
      }
      break;
    case "ArrowLeft":
      moveBy -= 2;
      player.style.left = moveBy + "px";
      if (moveBy <= 0) {
        moveBy += 2;
      }
      break;
    case "ArrowUp":
      moveBy -= 2;
      player.style.top = moveBy + "px";
      if (moveBy <= 0) {
        moveBy += 2;
      }
      break;
    case "ArrowDown":
      moveBy += 2;
      player.style.top = moveBy + "px";
      if (moveBy > 448) {
        moveBy -= 2;
      }
      break;
  }
};
document.addEventListener("keydown", (e) => {
  movePlayer(e, player2);
});
