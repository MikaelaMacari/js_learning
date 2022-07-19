// -------------------- Task #1 - array display--------------------------
const arr = [1, 8, 9, 5, 4, 6, 7, 2];

console.log("************** For Loop ****************");
for (let i = 0; i < arr.length; i++) {
  console.log(`Array[${i}]: ${arr[i]}`);
}
console.log("************** While Loop ****************");
let i = 0;
while (i < arr.length) {
  console.log(`Array[${i}]: ${arr[i]}`);
  i++;
}
console.log("************** Do While Loop ****************");
let j = 0;
do {
  console.log(`Array[${j}]: ${arr[j]}`);
  j++;
} while (j < arr.length);

console.log("************** For in ****************");
for (let key in arr) {
  console.log(`Array[${key}]: ${arr[key]}`);
}

console.log("************** For of ****************");
for (let num of arr) {
  console.log(num);
}

console.log("************** forEach ****************");
arr.forEach((el, idx) => console.log(`Array[${idx}]: ${el}`));

console.log("************** map ****************");
arr.map((item, idx) => console.log(`Array[${idx}]: ${item}`));

/* From my experience the map method is most used, also forEach method if we just want to iterate through an array.*/
console.log("************** entries ****************");
const iterator = arr.entries();

for (let x of iterator) {
  console.log(x);
}
