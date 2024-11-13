const choices = document.querySelector(".choices");
const results = document.querySelector(".results");

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissors";
  }
}

function getHumanChoice(event) {
  switch (event.target.className) {
    case "rock": return "rock";
    case "paper": return "paper";
    case "scissors": return "scissors";
  }
}

function setRoundResult(string) {
  const li = document.createElement("li");
  li.textContent = string;
  results.appendChild(li);
}

function playGame() {
  let humanChoice;
  let computerChoice;
  let humanScore = 0;
  let computerScore = 0;
  let currentRound = 0;

  function playRound(humanChoice, computerChoice) {
    function checkRoundWinner() {
      // Victory possibilities winner:loser.
      const possibilities = `paper:rock rock:scissors scissors:paper`;
      let isHumanWinner = possibilities.includes(`${humanChoice}:${computerChoice}`);
      let isComputerWinner = possibilities.includes(`${computerChoice}:${humanChoice}`);

      // Check the winner, the loser or draw and increment the score.
      if (isHumanWinner) {
        setRoundResult(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
      } else if (isComputerWinner) {
        setRoundResult(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
      } else {
        setRoundResult(`It's a draw! ${humanChoice} x ${computerChoice}.`);
      }
    }

    function resetGame() {
      currentRound = 0;
      humanScore = 0;
      computerScore = 0;
    }

    function checkFinalWinner() {
      if (currentRound == 5) {
        if (humanScore > computerScore) {
          console.log(`You win! ${humanScore} x ${computerScore}`);
        } else if (computerScore > humanScore) {
          console.log(`You lose! ${computerScore} x ${humanScore}`);
        } else if (humanChoice != null) {
          console.log(`It's a draw! ${humanScore} x ${computerScore}`);
        } 

        resetGame();
      }
    }

    checkRoundWinner();
    checkFinalWinner();
  }

  // This listener is resposible by player choice buttons.
  choices.addEventListener("click", (event)=>{
    currentRound++;
    playRound(getHumanChoice(event), getComputerChoice());
  });
}

playGame()