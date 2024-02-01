// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.push("coconut");
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("apple");

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }

// // --------- 2D ARRAYS ---------

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// matrix[0][0] = "X";
// matrix[0][1] = "O";

// for (let row of matrix) {
//   const rowString = row.join(" ");
//   console.log(rowString);
// }

// // -------- SORT() --------

// let fruits = ["apple", "orange", "banana", "coconut", "pinapple"];

// fruits.sort((a, b) => a - b);

// const people = [
//   { name: "Spongebob", age: 30, gpa: 3.0 },
//   { name: "Patrick", age: 50, gpa: 1.5 },
//   { name: "Squidward", age: 70, gpa: 3.5 },
//   { name: "Sandy", age: 20, gpa: 4.0 },
// ];

// people.sort((a, b) => a.name.localeCompare(b.name));

// // -------- SHUFFLE() --------

// const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// // FISHER-YATES ALGORITHM

// shuffle(cards);

// function shuffle(cards) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const random = Math.floor(Math.random() * (i + 1));

//     [array[i], array[random]] = [array[random], array[i]];
//   }
// }
