function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  return (
      (player === "rock" && computer === "Scissors") ||
      (player === "scissors" && computer === "Paper") ||
      (player === "paper" && computer === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const userChoice = userOption;
  const computerResult = getRandomComputerResult();
  let result;

  if (hasPlayerWonTheRound(userChoice.toLowerCase(), computerResult)) {
      playerScore++;
      result = `Player wins! ${userChoice} beats ${computerResult}`;
  } else if (computerResult.toLowerCase() === userChoice.toLowerCase()) {
      result = `It's a tie! Both chose ${userChoice}`;
  } else {
      computerScore++;
      result = `Computer wins! ${computerResult} beats ${userChoice}`;
  }

  const gameResult = {
      round: playerScore + computerScore,
      result: result,
  };
  localStorage.setItem(
      `Round${playerScore + computerScore}`,
      JSON.stringify(gameResult)
  );

  return result;
}

function playRound(userChoice) {
  const roundResult = getRoundResults(userChoice);
  document.getElementById("result").innerText = roundResult;
  document.getElementById("score").innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

resetGame();
document.getElementById("result").innerText = "Choose Rock, Paper, or Scissors to start the game.";
document.getElementById("score").innerText = `Player: ${playerScore} | Computer: ${computerScore}`;


// Coding Explanation:
// Function to get a random choice for the computer
// Array of possible choices
// Generate a random index based on the length of the options array
// Return the computer's choice

// Function to determine if the player has won the round
// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock

// Initialize player's score
// Initialize computer's score

// Function to get the result of a round
// Get the player's choice
// Get the computer's random choice
// Variable to store the result of the round

// If the player wins the round, increase player's score and set the result message
// If it's a tie, set the result message
// If the computer wins the round, increase computer's score and set the result message

// Create an object to store the game result
// Save the game result to local storage

// Return the result message

// Function to play a round
// Get the round result
// Display the round result on the page
// Update and display the scores on the page

// Function to reset the game scores
// Reset player's score
// Reset computer's score

// Reset the game scores initially
// Display initial instructions on the page
// Display initial scores on the page

