game()

console.log()

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber < 1) {
        return "rock"
    }
    else if (randomNumber < 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function roundOutcome(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === computerSelection)
    {
        return "draw"
    }
    if (computerSelection === "rock") {
        if (playerSelection === "scissors") {
            return "computer wins"
        }
        else {
            return "player wins"
        }
    }
    else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            return "computer wins"
        }
        else {
            return "player wins"
        }
    }
    else if (computerSelection === "scissors") {
        if (playerSelection === "paper") {
            return "computer wins"
        }
        else {
            return "player wins"
        }
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let outcome = roundOutcome((prompt("rock, paper or scissors?").toLowerCase()), computerPlay());
        if (outcome === "draw") {
            playerWins = ++playerWins;
            computerWins = ++computerWins;
            console.log("draw")
        }
        else if (outcome === "player wins") {
            playerWins = ++playerWins;
            console.log("player wins")
        }
        else {
            computerWins = ++computerWins;
            console.log("computer wins")
        }
    }
    console.log(`\nplayer wins: ${playerWins}\ncomputer wins: ${computerWins}`)
}