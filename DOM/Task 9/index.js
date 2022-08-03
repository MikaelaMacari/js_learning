const showNotificationBtn = document.getElementById("showNotification");
const defaultConfig = {
  top: 0,
  right: 0,
  message: "Hello",
  className: "welcome",
};

const addElement = ({ top, right, message, className }) => {
  let div = document.createElement("div");
  div.setAttribute("class", className || defaultConfig.className);
  div.textContent = message || defaultConfig.message;
  document.body.appendChild(div);
  div.style.top = `${top || defaultConfig.top}px`;
  div.style.right = `${right || defaultConfig.right}px`;
  showNotification.addEventListener("click", () => {
    div.style.display = "block";
    let interval = setInterval(() => (div.style.display = "none"), 1500);
    setTimeout(() => {
      clearInterval(interval);
    }, 3000);
  });
};
document.body.onload = addElement({ top: 15, right: 10, message: "Hi there" });
