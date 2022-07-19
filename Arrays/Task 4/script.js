// -------------------- Task #4 - array processing --------------------------

const sumInputNumbers = () => {
  const inputNum = [];
  while (true) {
    let num = prompt("Enter a number");

    if (isNaN(num) || num === null || num === "") break;

    inputNum.push(Number(num));
  }

  return inputNum.reduce((acc, curr) => acc + curr, 0);
};

console.log(`Sum of entered numbers is: ${sumInputNumbers()}`);
