// -------------------- Task #1 - current date -----------------------

const getCurrentDate = (separator) => {
  let date = new Date();
  console.log(`${date.getMonth() + 1}${separator}${date.getDate()}${separator}${date.getFullYear()}`);
};
getCurrentDate("/");
getCurrentDate("-");
