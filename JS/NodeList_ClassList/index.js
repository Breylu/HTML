// -------------------- NODELIST --------------------

// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach((button) => {
//   //   button.style.backgroundColor = "aqua";
//   //   button.textContent += "👳🏻‍♂️";

//   button.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "lightblue";
//   });
//   button.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "lightblue";
//   });
// });

// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";
// document.body.appendChild(newButton);

// buttons = document.querySelectorAll(".myButtons");

// -------------------- CLASSLIST --------------------

// const myH1 = document.getElementById("myH1");
// const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");
// myButton.classList.add("disabled");

// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.add("hover");
// });
// myH1.classList.add("enabled");
// myButton.classList.add("enabled");

// myButton.addEventListener("click", (event) => {
//   if (event.target.classList.contains("disabled")) {
//     event.target.textContent += "🤴🏻";
//   } else {
//     event.target.classList.replace("enabled", "disabled");
//   }
//   event.target.classList.replace("enabled", "disabled");
// });

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.classList.add("enabled");
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});
