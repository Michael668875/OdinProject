
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper or Scissors: ").toLowerCase()
    if (choice == "rock" || choice == "paper" || choice == "scissors" ) {
        return choice;
    } else {
        console.log("Invalid");
    }
}


function playRound(humanChoice, computerChoice) {
    console.log(`Player chooses: ${humanChoice} - Computer chooses: ${computerChoice}`);
    if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose. Scissors cut paper.");
        return "c";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose. Rock smashes scissors.");
        return "c";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose. Paper covers rock.");
        return "c";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win. Paper covers rock.");
        return "p";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win. Scissors cut paper.");
        return "p";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win. Rock smashes scissors.");
        return "p";
    } else {
        console.log("Draw");
        return;
    }
} 

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const round = playRound(humanSelection, computerSelection);

        if (round === "p") {
            playerScore++;
        } else if (round === "c") {
            computerScore++;
        }

        console.log(`SCORE: Player ${playerScore} | Computer ${computerScore}`);
    } 
    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else if (playerScore < computerScore) {
        console.log("Computer Wins ):");
    } else {
        console.log("Neither wins...");
    }
}

document.addEventListener("DOMContentLoaded", playGame); 




