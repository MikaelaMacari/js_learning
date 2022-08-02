const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
let numberInput = document.getElementById("number");

let count = 0;
numberInput.value = count;

const handleIncrement = () => {
  if (count < 9) {
    decrementBtn.disabled = false;
    count++;
    numberInput.value = count;
  } else {
    incrementBtn.disabled = true;
  }
};
const handleDecrement = () => {
  if (count > 0) {
    incrementBtn.disabled = false;
    count--;
    numberInput.value = count;
  } else {
    decrementBtn.disabled = true;
  }
};

incrementBtn.addEventListener("click", handleIncrement);
decrementBtn.addEventListener("click", handleDecrement);
