// PSEUDOCODE:
// 1: Generate a random number.
// 2: Using the generated number return "Rock", "Paper" or "Scissors".

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0: return "Rock";
    case 1: return "Paper";
    case 2: return "Scissors";
  }
}

console.log(getComputerChoice());