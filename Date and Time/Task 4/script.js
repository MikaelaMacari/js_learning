// -------------------- Task #4 - date comparison -----------------------

const compareDates = (d1, d2) => {
  const date1 = new Date(d1).getTime();
  const date2 = new Date(d2).getTime();

  if (date1 > date2) {
    return "Date1 > Date2";
  } else if (date1 < date2) {
    return "Date2 > Date1";
  } else {
    return "Date1 = Date2";
  }
};
console.log(compareDates("11/14/2013 00:00", "11/14/2013 00:00"));
console.log(compareDates("11/14/2013 00:01", "11/14/2013 00:00"));
console.log(compareDates("11/14/2013 00:00", "11/14/2013 00:01"));
