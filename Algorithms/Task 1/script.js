const iterateNumbers = () => {
  const arr = [];
  const newArr = [];
  for (let i = 0; i < 100; i += 2) {
    arr.push(i);
  }
  for (let j = 99; j > 0; j -= 2) {
    newArr.push(j);
  }
  const combinedArr = [];
  for (let i = 0; i < arr.length; i++) {
    combinedArr.push(arr[i], newArr[i]);
  }
  return combinedArr;
};
console.log(iterateNumbers());
