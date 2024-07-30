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

// Function to play one single round
function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors.");
        return humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock.");
        return computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock.");
        return humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper.");
        return computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper.");
        return humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors.");
        return computerScore++;
    } else {
        console.log("It's a draw!");
    }
}