// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(display);

// numbers.forEach(square);
// numbers.forEach(display);

// function double(element, index, array) {
//   array[index] = element * 2;
// }
// function triple(element, index, array) {
//   array[index] = element * 3;
// }
// function square(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }

// function display(element) {
//   console.log(element);
// }

let fruits = ["apple", "orange", "banana"];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array) {
  array[index] =
    element.charAt(0).toUpperCase() + element.slice(1, element.length);
}
function lowerCase(element, index, array) {
  array[index] = element.toLowerCase();
}
function capitalizeFirstLetter(element, index, array) {
  array[index] = element.charAt(0);
}

function display(element) {
  console.log(element);
}
