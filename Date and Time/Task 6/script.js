// -------------------- Task #6 - date intervals -----------------------

const calcTime = (birth_date) => {
  const currYear = new Date().getFullYear();
  const birthYear = new Date(birth_date).getFullYear();
  const currMonth = new Date().getMonth() + 1;
  const birthMonth = new Date(birth_date).getMonth() + 1;
  const currDate = new Date().getDate();
  const birthDate = new Date(birth_date).getDate();
  const years = currYear - birthYear;
  const months = years * 12 - (birthMonth - currMonth);
  const days = years * 365;
  return `${years} years old\n${months} months\n${days} days`;
};
console.log(calcTime("11, 18, 1993"));
