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
    userChoice = prompt("Choice: ");

    // If choice is not undefined or null convert it to lowercase.
    if (userChoice != null) {
      userChoice = userChoice.toLowerCase();  
    }
  }

  // If the user choice matches and return then.
  if (allowedChoices[userChoice]) {
    return allowedChoices[userChoice];
  } 

  return "Good bye!";
}

console.log(getHumanChoice())