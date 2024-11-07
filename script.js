let computerScore = 0;
let humanScore = 0;
let roundWinner = "First Round"

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  return ["rock", "paper", "scissor"][choice];
}

function getHumanChoice() {
  // Allowed choices
  let userChoice;
  let allowedChoices = {
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
  let possibilities = {
    "rock": "scissor",
    "paper": "rock",
    "scissor": "paper"
  }

  // Loop through the possibilities
  for (let possibilty in possibilities) {
    // Check if computer wins.
    if (computerChoice === possibilty && humanChoice === possibilities[possibilty]) {
      console.log(`You lose! ${possibilty} wins ${possibilities[possibilty]}!`);
      roundWinner = "Computer";
      computerScore++;
      break;
    }

    // Check if human wins.
    if (humanChoice === possibilty && computerChoice === possibilities[possibilty]) {
      console.log(`You win! ${possibilty} wins ${possibilities[possibilty]}!`);
      roundWinner = "You";
      humanScore++;
      break;
    }

    // With both choose the same is tie.
    if (humanChoice === computerChoice) {
      console.log(`Tie! ${humanChoice} vs ${computerChoice}.`);
      roundWinner = "Tie!";
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
      alert(`Computer wins! ${computerScore} x ${humanScore}`);
      break;
    }
    
    // Show human wins
    if (humanScore === 5) {
      alert(`You win! ${humanScore} x ${computerScore}`);
      break;
    }
  }
}

playGame();