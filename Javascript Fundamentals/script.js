//-------------------Task 1 CONDITIONAL OPERATOR --------------

// ----------------- First Method --------------
/*
let n = 2;
switch (n) {
    case 0:
      console.log("Zero");
      break;
    case 1:
      console.log("One");
      break;
    case 2:
      console.log("Two");
      break;
    case 3:
      console.log("Three");
      break;
    case 4:
      console.log("Four");
      break;
    case 5:
      console.log("Five");
      break;
    case 6:
      console.log("Six");
      break;
    case 7:
      console.log("Seven");
      break;
    case 8:
      console.log("Eight");
      break;
    case 9:
      console.log("Nine");
      break;
    default:
      console.log("Unknown number");
*/

// -------------- Second Method ------------
/*
let cond_op = () => {
  let n = Number(prompt("Enter a number from 0 to 9: "));
  switch (n) {
    case 0:
      alert("Zero");
      break;
    case 1:
      alert("One");
      break;
    case 2:
      alert("Two");
      break;
    case 3:
      alert("Three");
      break;
    case 4:
      alert("Four");
      break;
    case 5:
      alert("Five");
      break;
    case 6:
      alert("Six");
      break;
    case 7:
      alert("Seven");
      break;
    case 8:
      alert("Eight");
      break;
    case 9:
      alert("Nine");
      break;
    default:
      alert("Unknown number");
  }
};
cond_op();
*/

// ---------------------------- Task 2  LOOPS ------------------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// for (let i = 1; i < arr.length + 1; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// ---------------------------- Task 3  CONDITIONAL OPERATOR ------------------------------
// let a = Number(prompt("Enter first number: "));
// let b = Number(prompt("Enter second number: "));
// let c = Number(prompt("Enter third number: "));

// alert(`Minimum number is: ${Math.min(a, b, c)}\nMaximum number is: ${Math.max(a, b, c)}`);

// ---------------------------- Task 4  FUNCTIONS ------------------------------
// const str = prompt("Enter your name: ");
// const ucFirst = (str) => {
//   let newStr = str.toLowerCase();
//   return newStr.charAt(0).toUpperCase() + newStr.slice(1);
// };
// console.log(ucFirst(str));

// ---------------------------- Task 5  String ------------------------------
// let str = "$120";
// const extractCurrencyValue = (str) => {
//   return Number(str.split("").splice(1).join(""));
// };
// console.log(extractCurrencyValue(str));
// console.log(extractCurrencyValue("$120") === 120);
