// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(cubes);

// function square(element) {
//   return Math.pow(element, 2);
// }
// function cube(element) {
//   return Math.pow(element, 3);
// }

// const students = ["Sponegebob", "Patrick", "Squidward"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);
// function upperCase(element) {
//   return element.toUpperCase();
// }
// function lowerCase(element) {
//   return element.toLowerCase();
// }

const dates = ["2024-1-10", "2023-2-10", "2030-10-23"];
const formatDates = dates.map(formatDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
