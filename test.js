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


// plays a single round of the game
function playRound() {

    gameNumber++
    let computerChoice = cpuPlay();

    playerSelection = playerSelection.toLowerCase();

    // rock comparison
    if (computerChoice === "rock") {
        if (computerChoice === "rock" && playerSelection === "rock") {
            comparison -= 0;
            getScore();
            document.getElementById("text").innerHTML = "You both chose rock.  Your score is " + comparison + "." + endingPhrase;
            resetGame();
            return;
        } else if (computerChoice === "rock" && playerSelection === "paper") {
            comparison += 1;
            getScore();
            document.getElementById("text").innerHTML = "The CPU's rock is eaten by your paper! Your score is " + comparison + "." + endingPhrase;
            resetGame();
            return;
        } else {
            comparison -= 1;
            getScore();
            document.getElementById("text").innerHTML = "The CPU's rock smashes your scissors! Your score is " + comparison + "." + endingPhrase;
            return;
        }
    } 
    // paper comparison
    else if (computerChoice === "paper") {
        if (computerChoice === "paper" && playerSelection === "paper") {
            comparison -= 0;
            getScore();
            document.getElementById("text").innerHTML = "You both chose paper.  Your score is " + comparison + "." + endingPhrase;
            resetGame();
            return;
        } else if (computerChoice === "paper" && playerSelection === "rock") {
            comparison += 1;
            getScore();
            document.getElementById("text").innerHTML = "The CPU's paper eats your rock! Your score is " + comparison + "." + endingPhrase;
            resetGame();
            return;
        } else {
            comparison -= 1;
            getScore();
            document.getElementById("text").innerHTML = "Your scissors cut the CPU's rock into a little snowflake! Your score is " + comparison + "." + endingPhrase;
            return;
        }
    } 

    // scissors comparison
    else if (computerChoice === "scissors") {
        if (computerChoice === "scissors" && playerSelection === "scissors") {
            comparison -= 0;
            getScore();
            document.getElementById("text").innerHTML = "You both chose scissors.  Your score is " + comparison + "." + endingPhrase;
            resetGame();
            return;
    }   else if (computerChoice === "scissors" && playerSelection === "paper") {
            comparison += 1;
            getScore();
            document.getElementById("text").innerHTML = "The CPU's scissors cut your paper into a little snowflake! Your score is " + comparison + "." + endingPhrase;
            resetGame();
            return;
    } else {
            comparison -= 1;
            getScore();
            document.getElementById("text").innerHTML = "Your rock smashes the CPU's scissors! Your score is " + comparison + "." + endingPhrase;
            return;
    }
    } else {
        document.getElementById("text").innerHTML = "Something went wrong.  Please reload the page.";
    }
}

buttons.forEach((input) => {
    input.addEventListener("click", (e) => {
        playerSelection = input.value;
        input.focus();
        playRound()
    });
});

