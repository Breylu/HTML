let buttons = document.querySelectorAll(".myButtons");

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

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");
