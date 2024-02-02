// 5. Check if user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 4,
  B: 6,
  C: 8,
  D: 10,
};

const SYMBOL_VALUES = {
  A: 6,
  B: 5,
  C: 4,
  D: 3,
};

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: $");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid amount, try again.");
    } else {
      return numberDepositAmount;
    }
  }
};
const getNumberOfLines = () => {
  while (true) {
    const linesAmount = prompt("Enter amount of lines to bet on (1-3):");
    const numberOfLines = parseFloat(linesAmount);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid amount of lines, try again.");
    } else {
      return numberOfLines;
    }
  }
};
const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet amount per line: $");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("Bet amount is invalid, try again.");
    } else {
      return numberBet;
    }
  }
};

// loops through SYMBOLS_COUNT and returns the symbol and count

//generates array with all available symbols

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  //generates array with all reels, loops through the different reels
  //makes a copy of symbols
  //selecting a random symbol, adds it to array and removes it for no further selection

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};

const transpose = (reels) => {
  const rows = [];

  //accessing each column, then gets the element in the row (i)
  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};

//loops through every row inside "rows", giving an array representing the elements in the row
const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    //loops through the index and element inside the row a.k.a every element corresponds to a number
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      //adds "|" between each character
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

const getWinnings = (rows, bet, lines) => {
  let winnings = 0;

  //correspond the rows to the lines the player picks
  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    //loops through every symbol, checks if they are the same as the first one
    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
    }
  }

  return winnings;
};

const game = () => {
  let balance = deposit();

  while (true) {
    console.log(`You have a balance of $${balance}`);
    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);
    balance -= bet * numberOfLines;
    const reels = spin();
    const rows = transpose(reels);
    printRows(rows);
    const winnings = getWinnings(rows, bet, numberOfLines);
    balance += winnings;
    console.log("You won, $" + winnings.toString());

    if (balance <= 0) {
      console.log("You ran out of money!");
      break;
    }
    const playAgain = prompt("Do you want to play again? (y/n)? ");

    if (playAgain != "y") break;
  }
};

game();
