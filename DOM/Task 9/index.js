const showNotificationBtn = document.getElementById("showNotification");
// const defaultConfig = {
//   top: 0,
//   right: 0,
//   message: "Hello",
//   className: "welcome",
// };

const showNotification = ({ top = 0, right = 0, message = "Hello", className = "welcome" }) => {
  let div = document.createElement("div");
  div.setAttribute("class", className);
  div.textContent = message;
  document.body.appendChild(div);
  div.style.top = `${top}px`;
  div.style.right = `${right}px`;
  showNotificationBtn.addEventListener("click", () => {
    div.style.display = "block";
    let interval = setInterval(() => (div.style.display = "none"), 1500);
    setTimeout(() => {
      clearInterval(interval);
    }, 3000);
  });
};
document.body.onload = showNotification({ top: 15, right: 10, message: "Hi there" });
