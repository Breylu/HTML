// eventListener = Listen for specific events to create
//                 interactive web pages

// ----------------- MOUSE EVENTS -----------------------

const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");

// function changeColor(event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "OUCH! 🤶🏻";
// }

// myButton.addEventListener("click", (event) => {
//   myBox.style.backgroundColor = "tomato";
//   myBox.textContent = "OUCH! 🤶🏻";
// });

// myButton.addEventListener("mouseover", (event) => {
//   myBox.style.backgroundColor = "yellow";
//   myBox.textContent = "Don't do it 👳🏻‍♀️";
// });

// myButton.addEventListener("mouseout", (event) => {
//   myBox.style.backgroundColor = "lightgreen";
//   myBox.textContent = "Click me 👵🏻";
// });

// ----------------- KEY EVENTS -----------------------

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  // console.log(`Key down = ${event.key}`);

  //event.preventDefault();

  switch (event.key) {
    case `w`:
      y -= moveAmount;
      break;
    case `s`:
      y += moveAmount;
      break;
    case `a`:
      x -= moveAmount;
      break;
    case `d`:
      x += moveAmount;
      break;
  }
  myBox.style.top = `${y}px`;
  myBox.style.left = `${x}px`;
});
