//Computer choice for Rock, Paper, Scissors

function getComputerChoice(max) {
    const choice = Math.floor(Math.random() * max);
    
    
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else if (choice === 2) {
        return "Scissors";
    }  

}
  
console.log(getComputerChoice(3)); 
  
// Human Choice for Rock, Paper, Scissors




