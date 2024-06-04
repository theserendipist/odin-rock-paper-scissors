// Rock Paper Scissors Game

// Function to get computer choice (either Rock, Paper, or Scissors)
function getComputerChoice() {
    let rndInt = Math.floor(Math.random() * 3) + 1;
    let result;
    if (rndInt == 1) {
        result = "rock";
        return result;
    } else if (rndInt == 2) {
        result = "paper";
        return result;
    } else if (rndInt == 3) {
        result = "scissors";
        return result;
    }
}

// Function to get human choice
function getHumanChoice() {
    let choice = prompt("What's your pick? Rock, Paper or Scissors?").toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        alert("This is not a valid pick! Please type eiher Rock, Paper, or Scissors!");
        getHumanChoice();
    }
}

// 3. Declare humanScore and computerScore variables to keep track of scores
// 4. Function playRound to play one single round
// 5. Function playGame to play 5 rounds