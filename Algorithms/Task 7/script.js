const createMatrix = (n, x) => {
  if (n <= 10 && n >= 2) {
    return Array(n)
      .fill(null)
      .map(() => Array(n).fill(x));
  } else {
    return "The n number must me greater than 2 and less then 11";
  }
};
console.log(createMatrix(2, 4));
