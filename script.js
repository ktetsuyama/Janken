// Start of game
var playerScore = 0;
var computerScore = 0;
var tie = 0;

// give player prompt and choices
var PlayerChoice = prompt("Let's play Rock Paper Scissors! Pick r for rock, p for paper, and s for scissors.");


// computer chooses R, P, or S.
var choices = ["r", "p", "s"];

var computerChoice = choices [Math.floor (Math.random() * choices.length)];

// Game play
if (PlayerChoice === "r" && computerChoice === "s") {
    playerScore++;
    confirm("You chose rock and the Computer chose scissors. You Win! Player: " + playerScore + " Computer: " + computerScore + " Ties " + tie + " Do you want to play again?.");
} else if (PlayerChoice === "s" && computerChoice === "p") {
    playerScore++;
    confirm("You chose scissors and the Computer chose paper. You Win! Player: " + playerScore + " Computer: " + computerScore + " Ties " + tie + " Do you want to play again?.");
} else if (PlayerChoice === "p" && computerChoice === "r") {
    playerScore++;
    confirm("You chose paper and the Computer chose rock. You Win! Player: " + playerScore + " Computer: " + computerScore + " Ties " + tie + " Do you want to play again?.");
} else if (PlayerChoice === "r" && computerChoice === "p") {
    computerScore++;
    confirm("You chose rock and the Computer chose paper. You Lose! Player: " + playerScore + " Computer: " + computerScore + " Ties " + tie + " Do you want to play again?.");
} else if (PlayerChoice === "s" && computerChoice === "r") {
    computerScore++;
    confirm("You chose scissors and the Computer chose rock. You Lose! Player: " + playerScore + " Computer: " + computerScore + " Ties " + tie + " Do you want to play again?.");
} else if (PlayerChoice === "p" && computerChoice === "s") {
    
    computerScore++;confirm("You chose Paper and the Computer chose scissors. You Lose! Player: " + playerScore + " Computer: " + computerScore + " Ties " + tie + " Do you want to play again?.");
} else {
    tie++;
    confirm("It was a tie! Player: " + playerScore + " Computer: " + computerScore + " Ties " + tie + " Do you want to play again?.");
}