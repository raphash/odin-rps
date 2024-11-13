function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper or scissors?");

  if (!humanChoice) return;

  while (true) {
    switch (humanChoice.toLowerCase()) {
      case "rock": return "rock";
      case "paper": return "paper";
      case "scissors": return "scissors";

      default:
        humanChoice = prompt("Rock, paper or scissors?");
    }
  }
}

function playGame() {
  let humanChoice;
  let computerChoice;
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // Victory possibilities winner:loser.
    const possibilities = `paper:rock rock:scissors scissors:paper`;
    let isHumanWinner = possibilities.includes(`${humanChoice}:${computerChoice}`);
    let isComputerWinner = possibilities.includes(`${computerChoice}:${humanChoice}`);

    // Check the winner, the loser or draw and increment the score.
    if (isHumanWinner) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else if (isComputerWinner) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else {
      console.log(`It's a draw! ${humanChoice} x ${computerChoice}.`);
    }
  }

  // Start five rounds.
  for (let i = 0; i < 5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice == null) break;
    
    playRound(humanChoice, computerChoice);
  }

  // This shows the five rounds final result.
  if (humanScore > computerScore) {
    console.log(`You win! ${humanScore} x ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose! ${computerScore} x ${humanScore}`);
  } else if (humanChoice != null) {
    console.log(`It's a draw! ${humanScore} x ${computerScore}`);
  } else {
    console.log(`Good bye!`);
  }
}
