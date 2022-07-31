const createMatrix = (n) => {
  if (n <= 10) {
    return Array(n)
      .fill(null)
      .map(() => [...Array(n).keys()]);
  } else {
    return "The n number can't be greater than 10";
  }
};

const matrix = createMatrix(3);
const newArr = [
  [0, 3, 7],
  [5, 1, 4],
  [8, 6, 2],
];
console.log(matrix);
console.log(newArr);

// let arr = [];
// for (let i = 1; i <= 3; i++) {
//   let innerArr = [];
//   for (let j = 0; j < 3; j++) {
//     innerArr.push(j + i);
//   }
//   arr.push(innerArr);
// }

// console.log(arr);
