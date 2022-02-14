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

function outcome(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === computerSelection)
    {
        return "Draw"
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