// -------------------- Task #2 - array processing --------------------------
const arr = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

console.log("******************* 1.	выводит числа < 5 *********************");
const result = arr.filter((num) => num < 5);
console.log(result);

console.log("*** 2.	находит позиции элементов с максимальным и минимальным значением ***");
console.log(arr);
const minNum = Math.min(...arr);
const maxNum = Math.max(...arr);
const getAllIndexes = (arr, val) => {
  let indexes = [];
  let i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
};
console.log(`Index of minimum number is: ${getAllIndexes(arr, minNum)}\nIndex of maximum number is: ${getAllIndexes(arr, maxNum)}`);

console.log("******************* 3. сортирует массив убыванию *********************");
const sortedArr = arr.sort((a, b) => b - a);
console.log(sortedArr);

console.log("*** 4.	выводит элементы массива которые имеют значение больше чем среднее арифметическое значение всех элементов массива ***");

const sumOfArr = arr.reduce((prevValue, currValue) => prevValue + currValue, 0);
console.log(arr.filter((item) => item > sumOfArr / 2));
