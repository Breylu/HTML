// function happyBirthday(username, age) {
//   console.log("Happy birthday to you!");
//   console.log("Happy birthday to you!");
//   console.log(`Happy birthday dear ${username}!`);
//   console.log("Happy birthday to you!");
//   console.log(`You are ${age} years old `);
// }

// happyBirthday("Plankton", 13);
// happyBirthday("Patrick", 55);

// function add(x, y) {
//   return x + y;
// }
// function subtract(x, y) {
//   return x - y;
// }

// console.log(add(2, 3));
// console.log(subtract(2, 3));

// function isEven(number) {
//   return number % 2 === 0 ? true : false;
// }
// console.log(isEven(3));

// function isValidEmail(email) {
//   if (email.includes("@")) {
//     return email.includes("@") ? true : false;
//   }
// }

// console.log(isValidEmail("notScam@gmail.ru"));

// ------- CLOSURE -------

// function outer() {
//   let message = "Hello";
//   function inner() {
//     console.log(message);
//   }

//   inner();
// }

// outer();
// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//   }
//   function getCount() {
//     return count;
//   }
//   return { increment };
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();

// console.log(`The current count is ${counter.getCount()}`);

// function createGame() {
//   let score = 0;

//   function increaseScore(points) {
//     score += points;
//     console.log(`+${points}pts`);
//   }
//   function decreaseScore(points) {
//     score -= points;
//     console.log(`-${points}pts`);
//   }

//   function getScore() {
//     return score;
//   }
//   return { increaseScore, decreaseScore, getScore };
// }

// const game = createGame();

// game.increaseScore(5);
// game.decreaseScore(3);
// console.log(`The final score is ${game.getScore()}`);

// // ----------- SetTimeout(); -----------

// function sayHello() {
//   window.alert("Hello");
// }
// const timeoutId = setTimeout(() => window.alert("Hello"), 3000);

// clearTimeout(timeoutId);

//------------------------------------------
// let timeoutId;

// function startTimer() {
//   timeoutId = setTimeout(() => window.alert("Hello"), 3000);
//   console.log("STARTED");
// }
// function clearTimer() {
//   clearTimeout(timeoutId);
//   console.log("CLEARED");
// }

// // ----------- CONSOLE.TIME(); -----------
console.time("test");

for (let i = 0; i < 1000000; i++) {
  // Skill issue
}
console.timeEnd("test");

//-----------------------------------------

function loadData() {
  console.time("loadData");
  for (let i = 0; i < 10000000; i++) {
    // load something
  }
  console.timeEnd("loadData");
}
