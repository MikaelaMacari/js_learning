// -------------------- Task #5 - time conversion -----------------------

const timeConvert = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = Math.ceil(time % 60);
  return `${time} minutes = ${hours} hour(s) and ${minutes} minute(s)`;
};
console.log(timeConvert(200));
