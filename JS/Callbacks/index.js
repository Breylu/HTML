// callback = a function that is passed as an argument
// to another function. Used when function takes a long time.

// hello(wait);

// function hello(callback) {
//   console.log("Hello!");
//   callback();
// }

// function wait() {
//   console.log("Wait!");
// }

// function leave() {
//   console.log("Leave!");
// }

// function goodbye() {
//   console.log("Goodbye!");
// }

sum(displayConsole, 1, 2);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}
