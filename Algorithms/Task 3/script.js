const recursion = (number) => {
  if (number === 0) {
    return 1;
  } else {
    return number * recursion(number - 1);
  }
};
console.log(recursion(4));
