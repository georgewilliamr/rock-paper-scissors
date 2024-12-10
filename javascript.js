'use strict';

// 1. Computer then needs to randomly select its choice using math.random 
// 2. Human gives choice using prompt, ensure it isnt case sensitive
// 3. Create scores and set to 0
// 4. Fucntion calling other function to play round 

// Computer Choice

const getComputerChoice = function() {
  const randomInt = Math.floor(Math.random() * 3);
  if (randomInt === 0) {
      return "rock";
  } else if (randomInt === 1) {
      return "paper";
  } else {
      return "scissors";
  }
}

// Human Choise 

const getHumanChoice = function() {
  const choice = prompt("Enter your choice: Rock, Paper, or Scissors?").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
  } else {
      console.log("Invalid choice, Please enter Rock, Paper, or Scissors.");
      return getHumanChoice();
  }
}

// Function to play a single round

const playRound = function(humanChoice, computerChoice) {
      const formattedHumanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
      const formattedComputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

      if (humanChoice === computerChoice) {
          console.log("It's a tie!");
          return 0; 
      } else if (
          (humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")
      ) {
          console.log(`You win! ${formattedHumanChoice} beats ${formattedComputerChoice}.`);
          return 1; 
      } else {
          console.log(`You lose! ${formattedComputerChoice} beats ${formattedHumanChoice}.`);
          return -1; 
    }
}

// Function to play the entire game (5 rounds)

const playGame = function() {
  let humanScore = 0;
  let computerScore = 0;

  // Play 5 rounds
  
  for (let i = 0; i < 5; i++) {
      console.log(`Round ${i + 1}:`);
      const humanChoice = getHumanChoice(); // Get human's choice
      const computerChoice = getComputerChoice(); // Get computer's choice
      console.log(`You chose: ${humanChoice}`);
      console.log(`Computer chose: ${computerChoice}`);
      
      const roundResult = playRound(humanChoice, computerChoice);
      
      // Update the score based on the round result
      if (roundResult === 1) {
          humanScore++; // Human wins the round
      } else if (roundResult === -1) {
          computerScore++; // Computer wins the round
      }
  }

  console.log(`Final Scores:`);
  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (humanScore > computerScore) {
      console.log("Congratulations! You win the game!");
  } else if (humanScore < computerScore) {
      console.log("Sorry! The computer wins the game.");
  } else {
      console.log("It's a tie game!");
  }
}


console.log(playGame());