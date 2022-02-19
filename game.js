function game(humanSelection) {
    const output = document.querySelector("#output");
    const computerSelection = computerPlay()
    if (humanSelection === computerSelection) {//.
        output.textContent = "Draw";
        return;
    }
    if ((humanSelection === "scissors" && computerSelection === "paper") || 
    (humanSelection === "paper" && computerSelection === "rock") || 
    (humanSelection === "rock" && computerSelection === "scissors")) {
        output.textContent = `you win this round! ${humanSelection} beats ${computerSelection}!`;
        scoring("human");
        return;
    }
    else {
        output.textContent = `you lose this round! ${computerSelection} beats  ${humanSelection}!`;
        scoring("computer")
        return;
    }
}

function scoring(winner) {
    if (winner === "human") {
        humanScoreNode.textContent = ++humanScore;
    }
    else {
        computerScoreNode.textContent = ++computerScore;
    }
    if (humanScore > 4 || computerScore > 4) {
        computerScoreNode.textContent = 5; computerScore = 0;
        humanScoreNode.textContent = 5; humanScore = 0;
        alert("game is over, click another button to start again")
        computerScoreNode.textContent = 0; humanScoreNode.textContent = 0;
        return;
    }
}

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
const humanScoreNode = document.querySelector("#human-score");
const computerScoreNode = document.querySelector("#computer-score");

let humanScore = 0; let computerScore = 0;

const btns = Array.from(document.querySelectorAll("button"));
btns.forEach((humanPlay) => humanPlay.addEventListener("click", function() {game(humanPlay.value)}))
