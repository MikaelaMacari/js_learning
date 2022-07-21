//------------------- Task #9 working with keys --------------

let weekDays = {
  Luni: "Mo",
  Marti: "Tu",
  Miercuri: "We",
  Joi: "Th",
  Vineri: "Fr",
  Sambata: "Sa",
  Duminica: "Su",
};

const switchKeysWithValues = (obj) => {
  const switchedArr = Object.entries(obj).map(([key, value]) => [value, key]);
  return Object.fromEntries(switchedArr);
};
console.log(switchKeysWithValues(weekDays));
