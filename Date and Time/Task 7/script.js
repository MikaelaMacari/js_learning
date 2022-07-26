// -------------------- Task #7 - date add -----------------------

const addYears = (date, year) => {
  date = new Date(date);
  return new Date(date.setFullYear(date.getFullYear() + year));
};
console.log(addYears("2014,10,2", 10).toString());
