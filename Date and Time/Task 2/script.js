// -------------------- Task #2 - days in a month -----------------------

const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(2012, 1));
console.log(getDaysInMonth(2012, 2));
console.log(getDaysInMonth(2012, 9));
console.log(getDaysInMonth(2012, 12));
