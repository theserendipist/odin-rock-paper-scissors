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

// Function to play game
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore ++;
        results.innerHTML = `<p>Player ${humanScore} : ${computerScore} Computer</p>`
                               + "<p>You win! Rock beats Scissors.</p>";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore ++;
        results.innerHTML = `<p>Player ${humanScore} : ${computerScore} Computer</p>`
                                + "<p>You lose! Paper beats Rock.</p>";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore ++;
        results.innerHTML = `<p>Player ${humanScore} : ${computerScore} Computer</p>`
                                + "<p>You win! Paper beats Rock.</p>";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore ++;
        results.innerHTML = `<p>Player ${humanScore} : ${computerScore} Computer</p>`
                               + "<p>You lose! Scissors beats Paper.</p>";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore ++;
        results.innerHTML = `<p>Player ${humanScore} : ${computerScore} Computer</p>`
                                + "<p>You win! Scissors beats Paper.</p>";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore ++;
        results.inneHTML = `<p>Player ${humanScore} : ${computerScore} Computer</p>`
                               + "<p>You lose! Rock beats Scissors.</p>";
    } else {
        results.innerHTML = `<p>Player ${humanScore} : ${computerScore} Computer</p>`
                                + "<p>It's a draw!</p>";
    }

    // Checks win situation and resets afterwards
    if (humanScore == 5) {
        results.innerHTML += "<h3>You win this game!</h3>";
        humanScore = 0;
        computerScore = 0; 
    } else if (computerScore == 5) {
        results.innerHTML += "<h4>The Computer wins this game!</h4>";
        humanScore = 0;
        computerScore = 0; 
    }
}

//Event listeners to record human choice and play round
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