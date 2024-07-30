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

// Function to play one single round
let humanChoice;

function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "scissors") {
        results.textContent = "You win! Rock beats Scissors.";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        results.textContent = "You lose! Paper beats Rock.";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        results.textContent = "You win! Paper beats Rock.";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        results.textContent = "You lose! Scissors beats Paper.";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        results.textContent = "You win! Scissors beats Paper.";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        results.textContent = "You lose! Rock beats Scissors.";
    } else {
        results.textContent = "It's a draw!";
    }
}

//Event listeners to record human choice and play one round, display results
const results = document.querySelector("#results");

const rckBtn = document.querySelector("#rck-btn");
rckBtn.addEventListener("click", () => {
    playRound(humanChoice = "rock");
});

const pprBtn = document.querySelector("#ppr-btn");
pprBtn.addEventListener("click", () => {
    playRound(humanChoice = "paper");
});

const scissBtn = document.querySelector("#sciss-btn");
scissBtn.addEventListener("click", () => {
    playRound(humanChoice = "scissors");
});