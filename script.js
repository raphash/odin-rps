let computerScore = 0;
let humanScore = 0;
let roundWinner = "TIE"

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  return ["rock", "paper", "scissor"][choice];
}

function getHumanChoice() {
  // Allowed choices
  let userChoice;
  const allowedChoices = {
    "rock": "rock",
    "paper": "paper",
    "scissor": "scissor"
  };

  // While the user choice is not in allowedChoices: prompt user.
  while (!(allowedChoices[userChoice]) && (userChoice !== null)) {
    userChoice = prompt(`Rock, paper or scissor? | ${humanScore} x ${computerScore} | Winner: ${roundWinner}`);

    // If choice is not undefined or null convert it to lowercase.
    if (userChoice != null) {
      userChoice = userChoice.toLowerCase();
    }
  }

  // If the user choice matches and return then.
  if (allowedChoices[userChoice]) {
    return allowedChoices[userChoice];
  }
}

function playRound(computerChoice, humanChoice) {
  const possibilities = {
    "rock": "scissor",
    "paper": "rock",
    "scissor": "paper"
  }

  // Loop through the possibilities
  for (const possibilty in possibilities) {
    // Check if computer wins.
    if (computerChoice === possibilty && humanChoice === possibilities[possibilty]) {
      roundWinner = "COMPUTER";
      computerScore++;
      break;
    }

    // Check if human wins.
    if (humanChoice === possibilty && computerChoice === possibilities[possibilty]) {
      roundWinner = "YOU";
      humanScore++;
      break;
    }

    // When both choose the same is tie.
    if (humanChoice === computerChoice) {
      roundWinner = "TIE";
      break;
    }
  }
}

function playGame() {
  
  // Runs until the score is five.
  while (computerScore !== 5 || humanScore !== 5) {
    playRound(getComputerChoice(), getHumanChoice());

    // Show computer wins
    if (computerScore === 5) {
      alert(`COMPUTER WINS! ${computerScore} x ${humanScore}`);
      break;
    }
    
    // Show human wins
    if (humanScore === 5) {
      alert(`YOU WIN! ${humanScore} x ${computerScore}`);
      break;
    }
  }
}

playGame();