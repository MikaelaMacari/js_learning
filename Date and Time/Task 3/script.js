// -------------------- Task #3 - month name -----------------------

const getMonthName = (date) => {
  const newDate = new Date(date);
  const options = { month: "long" };

  return newDate.toLocaleDateString("en-GB", options);
};
console.log(getMonthName("10/11/2009"));
console.log(getMonthName("11/13/2014"));
