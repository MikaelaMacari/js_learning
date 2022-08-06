const player = document.getElementById("player");
const moveBy = 10;

window.addEventListener("load", () => {
  player.style.position = "absolute";
  player.style.left = 0;
  player.style.top = 0;
});

const movePlayer = (event, player) => {
  switch (event.key) {
    case "ArrowRight":
      player.style.left = parseInt(player.style.left) + moveBy + "px";
      break;
    case "ArrowLeft":
      player.style.left = parseInt(player.style.left) - moveBy + "px";
      break;
    case "ArrowUp":
      player.style.top = parseInt(player.style.top) - moveBy + "px";
      break;
    case "ArrowDown":
      player.style.top = parseInt(player.style.top) + moveBy + "px";
      break;
  }
};
window.addEventListener("keyup", (e) => {
  movePlayer(e, player);
});
