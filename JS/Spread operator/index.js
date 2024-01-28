// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);

// let username = "Breylu";
// let letters = [...username];

// console.log(letters);

// let fruits = ["apple", "orange", "tomato"];
// let vegetables = ["carrots", "celery", "potatoes"];
// let foods = [...fruits, ...vegetables, "eggs", "milk"];

// console.log(foods);

// ---------- REST PARAMETER ----------
// OPPOSITE OF SPREAD PARAMETER

// function openFridge(...foods) {
//   console.log(...foods);
// }
// function getFood(...foods) {
//   return foods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";

// // openFridge(food1, food2, food3, food4);

// const foods = getFood(food1, food2, food3, food4);

// console.log(foods);

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// function getAverage(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result / numbers.length;
// }

// const total = getAverage(75, 100, 85, 90, 50);

// console.log(total);

// const total = sum(1, 2, 3, 4, 5);

// console.log(`Your total is $${total}`);

function combineStrings(...strings) {
  return strings.join(" ");
}

const fullName = combineStrings("Mr. ", "Spongebob", "Squarepants");

console.log(fullName);
