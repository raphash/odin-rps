let computerScore = 0;
let humanScore = 0;

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
    userChoice = prompt("Rock, paper or scissor?");

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

  for (let possibilty in possibilities) {
    // Check if computer wins.
    if (computerChoice === possibilty && humanChoice === possibilities[possibilty]) {
      console.log(`You lose! ${possibilty} wins ${possibilities[possibilty]}!`);
      computerScore++;
      break;
    }

    // Check if human wins.
    if (humanChoice === possibilty && computerChoice === possibilities[possibilty]) {
      console.log(`You win! ${possibilty} wins ${possibilities[possibilty]}!`);
      humanScore++;
      break;
    }

    if (humanChoice === computerChoice) {
      console.log(`Tie! ${humanChoice} vs ${computerChoice}.`);
      break;
    }
  }
}

