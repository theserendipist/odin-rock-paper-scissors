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

// 2. Function to get human choice getHuman Choice
// 3. Declare humanScore and computerScore variables to keep track of scores
// 4. Function playRound to play one single round
// 5. Function playGame to play 5 rounds