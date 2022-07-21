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

const translate = (obj) => {
  return { Mo: "Luni", Tu: "Marti", We: "Miercuri", Th: "Joi", Fr: "Vineri", Sa: "Sambata", Su: "Duminica" };
};
console.log(translate(weekDays));
