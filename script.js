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

  // If nothing in input return.
  if (!choice) return;

  // This ends the game if user cancel.
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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Function to play a round.
  function playRound(humanChoice, computerChoice) {
    // Victory possibilities.
    let cases = `paper:rock rock:scissors scissors:paper`;
    let isHumanWinner = cases.includes(`${humanChoice}:${computerChoice}`);
    let isComputerWinner = cases.includes(`${computerChoice}:${humanChoice}`);

    // Return the winner or tie.
    if (isHumanWinner) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else if (isComputerWinner) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
      computerScore++;
    } else {
      console.log(`It's a draw! ${humanChoice} x ${computerChoice}.`);
    }
  }

  // Play five rounds.
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice == null) break;
    
    playRound(humanChoice, computerChoice);
  }

  // Compute the winner or tie.
  if (humanScore > computerScore) {
    console.log(`You win! ${humanScore} x ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose! ${computerScore} x ${humanScore}`);
  } else {
    console.log(`It's a draw! ${humanScore} x ${computerScore}`)
  }
}

playGame() 