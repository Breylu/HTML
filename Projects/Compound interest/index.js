function calculateCompoundInterest() {
  const totalAmount = document.getElementById("totalAmount");
  const principalInput = document.getElementById("principalAmount");
  const interestRateInput = document.getElementById("interestRate");
  const yearsInput = document.getElementById("years");

  let principal = Number(principalInput.value);
  let interest = Number(interestRateInput.value / 100);
  let years = Number(yearsInput.value);

  if (principal < 0) {
    principal = 0;
    principalInput = 0;
  }
  if (interest < 0) {
    interest = 0;
    interestRateInput = 0;
  }
  if (years < 0) {
    years = 0;
    yearsInput = 0;
  }

  const result = principal * Math.pow(1 + interest / 1, 1 * years);

  totalAmount.textContent = result.toLocaleString(undefined, {
    style: "currency",
    currency: "EUR",
  });
}
