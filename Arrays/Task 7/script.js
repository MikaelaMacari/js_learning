// -------------------- Task #7 - array functions --------------------------

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const extract = (arr, startPos, endPos) => {
  return arr.slice(startPos, endPos + 1);
};
console.log(extract(arr, 2, 4));
