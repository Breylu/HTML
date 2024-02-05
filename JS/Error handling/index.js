// try {
//   console.log(x);
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log("This always executes");
// }

try {
  const divident = window.prompt("Enter a divident: ");
  const divisor = window.prompt("Enter a divisor: ");

  if (divisor === 0) {
    throw new Error("You can't divide by 0");
  }
  if (isNaN(divident) || isNaN(divisor)) {
    throw new Error("Values must be a number");
  }
  const result = divident / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
}
