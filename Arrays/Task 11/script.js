// -------------------- Task #11 - destructuring assignment --------------------------

let colors = ["white", "blue", "yellow", "black", "red", "green"];
let [firstColor, secondColor, ...otherColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(otherColors);
