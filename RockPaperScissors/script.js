

// Dom queries
let playerScore = 0;
let computerScore = 0;
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");

const resultsDiv = document.querySelector("#results");
const resultsDiv2 = document.querySelector("#results2");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

// event listeners
rockButton.addEventListener("click", () => {playGame("rock");});
paperButton.addEventListener("click", () => {playGame("paper");});
scissorsButton.addEventListener("click", () => {playGame("scissors");});

// functions
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(humanChoice, computerChoice) {
    resultsDiv.textContent = `Player chooses: ${humanChoice} - Computer chooses: ${computerChoice}`
    console.log(`Player chooses: ${humanChoice} - Computer chooses: ${computerChoice}`);
    if (humanChoice == "paper" && computerChoice == "scissors") {
        resultsDiv2.textContent = "You lose. Scissors cut paper."
        return "c";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        resultsDiv2.textContent = "You lose. Rock smashes scissors."
        return "c";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        resultsDiv2.textContent = "You lose. Paper covers rock."
        return "c";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        resultsDiv2.textContent = "You win. Paper covers rock."
        return "p";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        resultsDiv2.textContent = "You win. Scissors cut paper."
        return "p";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        resultsDiv2.textContent = "You win. Rock smashes scissors."
        return "p";
    } else {
        resultsDiv2.textContent = "Draw"
        return;
    }
} 

function playGame(humanSelection) { 
    if (playerScore >= 5 || computerScore >= 5) return;
    const computerSelection = getComputerChoice();
    const round = playRound(humanSelection, computerSelection);

    if (round === "p") {
        playerScore++;
    } else if (round === "c") {
        computerScore++;
    }

    scoreDiv.textContent = `SCORE: Player ${playerScore} | Computer ${computerScore}`
    
    
    if (playerScore >= 5 || computerScore >= 5) {
        winnerDiv.textContent = playerScore > computerScore ? "Player Wins" : "Computer Wins";
    }     
}






