const generateSequence = () => {
  const arr = [];
  for (let j = 0; j <= 201; j++) {
    if (j % 2 !== 0) {
      arr.push(j);
    }
  }

  newArr = [];
  arr.reduce((acc, curr) => {
    const result = acc + curr;
    newArr.push(acc);
    return result;
  });
  return newArr;
};
console.log(generateSequence());
