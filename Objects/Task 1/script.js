//------------------- Task #1 - object creation --------------

console.log("Создайте пустой объект user");
const user = {};
console.log(user);

console.log("Добавьте свойство name со значением John");
user.name = "John";
console.log(user);

console.log("Добавьте свойство surname со значением Smith");
user.surname = "Smith";
console.log(user);

console.log("Измените значение свойства name на Pete");
user.name = "Pete";
console.log(user);

console.log("Удалите свойство name из объекта");
delete user.name;
console.log(user);
