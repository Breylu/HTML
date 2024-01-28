function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChar = `abcdefghijklmnopqrstuvwxyz`;
  const uppercaseChar = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  const numbers = `1234567890`;
  const symbolChar = `!"£$%^&*()_-+=?><,./`;
  let allowedChars = ``;
  let password = ``;

  if (includeLowercase) {
    allowedChars += lowercaseChar;
  }

  if (includeUppercase) {
    allowedChars += uppercaseChar;
  }

  if (includeNumbers) {
    allowedChars += numbers;
  }

  if (includeSymbols) {
    allowedChars += symbolChar;
  }

  for (let i = 0; i < passwordLength; i++) {
    password += allowedChars.charAt(
      Math.floor(Math.random() * allowedChars.length)
    );
  }
  return password;
}

const passwordLength = 10;
let includeLowercase = true;
let includeUppercase = true;
let includeNumbers = true;
let includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);
console.log(`Generated password: ${password}`);
