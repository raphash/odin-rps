// PSEUDOCODE:
// 1: Generate a random number.
// 2: Using the generated number return "Rock", "Paper" or "Scissors".
// 3: Get the human input
// 4: Convert it to lowercase
// 5: Return only "rock", "paper" or "scissors" else ask again

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, paper or scissors?");

  // This ends the game if user cancel.
  if (!choice) return "Good bye!";

  while (true) {
    // Choice is true? Convert to lowercase.
    switch (choice && choice.toLowerCase()) {
      case "rock": return "rock";
      case "paper": return "paper";
      case "scissors": return "scissors";

      default:
        choice = prompt("Rock, paper or scissors?");
    }
  }
}