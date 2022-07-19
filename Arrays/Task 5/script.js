// -------------------- Task #5 - arrow methods and array functions --------------------------

function square(x) {
  return x * x;
}

const convert = (fn, arr) => {
  return arr.map(fn);
};
let arr = [1, 2, 3, 4];
console.log(convert(square, arr)); // [1, 4, 9, 16]
console.log(arr);
