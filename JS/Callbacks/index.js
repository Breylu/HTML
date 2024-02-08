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

// sum(displayConsole, 1, 2);

// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }

// function displayConsole(result) {
//   console.log(result);
// }

// function displayPage(result) {
//   document.getElementById("myH1").textContent = result;
// }

function task1() {
  setTimeout(() => {
    console.log("task 1 complete");
    callback();
  }, 2000);
}

function task2() {
  setTimeout(() => {
    console.log("task 2 complete");
    callback();
  }, 1000);
}

function task3() {
  setTimeout(() => {
    console.log("task 3 complete");
    callback();
  }, 3000);
}

function task4() {
  setTimeout(() => {
    console.log("task 4 complete");
    callback();
  }, 1500);
}
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => console.log("All tasks complete"));
    });
  });
});
