// -------------------- Task #3 - array processing --------------------------
console.log("1.	Создайте массив styles с элементами «Джаз» и «Блюз».");
const styles = ["Джаз", "Блюз"];
console.log(styles);

console.log("2.	Добавьте «Рок-н-ролл» в конец.");
styles.push("Рок-н-ролл");
console.log(styles);

console.log("3.	Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.");
let middleOfArr = styles[Math.round((styles.length - 1) / 2)];
const idxOfMiddle = styles.indexOf(middleOfArr);
styles[idxOfMiddle] = "Классика";
console.log(styles);

console.log("4.	Удалите первый элемент массива и покажите его.");
const removedEl = styles.shift();
console.log(removedEl);
console.log(styles);

console.log("5.	Вставьте «Рэп» и «Регги» в начало массива.");
styles.unshift("Рэп", "Регги");
console.log(styles);
