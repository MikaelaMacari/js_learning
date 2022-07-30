//------------------- Task #8 working with keys --------------

let weekDays = {
  Mo: "Понедельник",
  Tu: "Вторник",
  We: "Среда",
  Th: "Четверг",
  Fr: "Пятница",
  Sa: "Суббота",
  Su: "Воскресенье",
};
let translatedweekDays = {
  Mo: "Luni",
  Tu: "Marti",
  We: "Miercuri",
  Th: "Joi",
  Fr: "Vineri",
  Sa: "Sambata",
  Su: "Duminica",
};
const translate = (obj, translatedObj) => {
  Object.keys(obj).forEach((weekday, i) => {
    const translatedWeekDay = Object.keys(translatedObj);

    if (weekday === translatedWeekDay[i]) {
      return (obj[weekday] = translatedObj[weekday]);
    }
  });
};
translate(weekDays, translatedweekDays);
console.log(weekDays);
