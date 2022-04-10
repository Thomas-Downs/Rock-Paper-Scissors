// global variables
let comparison = 0;
let playerSelection = "";
const buttons = document.querySelectorAll("input");
let gameNumber = 0;
let endingPhrase = "";

// computer choice
function cpuPlay() {
    let computerSelection = Math.random();
    if (computerSelection < 0.34) {
        return "rock";
    } else if (computerSelection < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

// check to see if game is final
function getScore() {
    if (gameNumber == 5) {
        if (comparison == 0) {
            endingPhrase = "<br />" + "Tie!";
        } else if (comparison > 0) {
            endingPhrase = "<br />" + "You won the game!";
        } else {
            endingPhrase = "<br />" + "You lose the game!";
        }
    } else {
        return;
    }
}

// resets game is score is 5
function resetGame() {
    if (gameNumber == 5) {
        gameNumber = 0;
        comparison = 0;
        endingPhrase = "";
    } else {
        return;
    }
}

