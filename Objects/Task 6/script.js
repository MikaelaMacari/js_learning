//------------------- Task #6 - array of objects --------------

const arrOfObj = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: null, y: 4 },
  { x: 3, y: undefined },
];

const showCoordinates = (arr) => {
  return arr.filter((item) => {
    return Number(item.x) && Number(item.y);
  });
};

console.log(showCoordinates(arrOfObj));
