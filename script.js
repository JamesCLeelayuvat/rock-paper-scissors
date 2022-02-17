function computerPlay() {
    //randomize a number between 1 and 3
    let random = Math.floor(Math.random() * 2 + 1);
    switch (random) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "Something Went Wrong";
    }
}

function singleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) { //Switch the player 
        case "rock": //If the player chooses rock
            switch (computerSelection) {
                case "rock": //If the computer chooses rock
                    return "Draw! Rock and Rock"
                case "paper": //If the computer chooses paper
                    return "You Lose! Paper beats Rock"
                case "scissors": //If the computer chooses scissors
                    return "You Win! Rock beats Scissors"
            }
        case "paper": //If the player chooses paper
            switch (computerSelection) {
                case "rock": //If the computer chooses rock
                    return "You Win! Paper beats Rock"
                case "paper": //If the computer chooses paper
                    return "Draw! Paper and Paper"
                case "scissors": //If the computer chooses scissors
                    return "You Lose! Scissors beats Paper"
            }
        case "scissors": //If the plyaer chooses scissors
            switch (computerSelection) {
                case "rock": //If the computer chooses rock
                    return "You Lose! Rock beats Scissors"
                case "paper": //If the computer chooses paper
                    return "You Win! Scissors beats Paper"
                case "scissors": //If the computer chooses scissors
                    return "Draw! Scissors and Scissors"
            }
        default:
            return "Something went wrong"
    }
}

function playRoundRock() {
    played.textContent = "";
    played.textContent = singleRound("rock", computerPlay());
}

function playRoundPaper() {
    played.textContent = "";
    played.textContent = singleRound("paper", computerPlay());
}

function playRoundScissors() {
    played.textContent = "";
    played.textContent = singleRound("scissors", computerPlay());
}

let body = document.querySelector("body");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let buttons = document.querySelector("#buttons");
let played = document.createElement("div");
body.appendChild(played);

rock.addEventListener("click", playRoundRock);
paper.addEventListener("click", playRoundPaper);
scissors.addEventListener("click", playRoundScissors);