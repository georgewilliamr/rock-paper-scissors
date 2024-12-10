'use strict';

// 1. Computer then needs to randomly select its choice using math.random 
// 2. Human gives choice 
// 3. Use if / else statements to determine who is winner. 




const getRandomChoice = function() {
    const randomInt = Math.floor(Math.random() * 3);
  
  if (randomInt === 0){
    return "rock";
  } else if (randomInt === 1){
    return "paper";
  } else {
    return "scissors";
  }

}
console.log(getRandomChoice());


const getHumanChoice = function() {
    const choice = prompt("Enter your choice: Rock, Paper, or Scissors?").toLowerCase();
    
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    } else {
        console.log("Invalid choice, Please enter Rock, Paper, or Scissors.");
        return getHumanChoice();
    }
}

const humanChoice = getHumanChoice();
console.log(`You chose: ${humanChoice}`);