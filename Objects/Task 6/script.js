//------------------- Task #6 - array of objects --------------

const arrOfObj = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: null, y: 4 },
  { x: 3, y: undefined },
];

const showCoordinates = (arr) => {
  return arr.filter((item) => item.x !== null && item.y !== undefined);

  // for (let value of Object.values(item)) {
  //   return value !== null;
  // }
  // for (key in item) {
  //   return item[key] !== null;
  // }
  // }
};

console.log(showCoordinates(arrOfObj));
