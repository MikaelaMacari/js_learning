const message = document.getElementById("msg");
const clearBtn = document.getElementById("clear");
let timeoutId;
const saveMessage = () => {
  const msg = message.value;
  localStorage.setItem("message", msg);
};
const getMsg = () => {
  const savedMsg = localStorage.getItem("message");
  message.value = savedMsg;
};

message.addEventListener("change", () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(function () {
    saveMessage();
  }, 1000);
});

getMsg();

clearBtn.addEventListener("click", () => {
  message.value = "";
});
