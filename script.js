// Rock Paper Scissors Game

// Function to get computer choice (either Rock, Paper, or Scissors)
function getComputerChoice() {
    let rndInt = Math.floor(Math.random() * 3) + 1;
    let result;
    if (rndInt == 1) {
        result = "Rock";
        return result;
    } else if (rndInt == 2) {
        result = "Paper";
        return result;
    } else if (rndInt == 3) {
        result = "Scissors";
        return result;
    }
}

