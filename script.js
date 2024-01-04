// Start of game
var playerScore = 0;
var computerScore = 0;
var tie = 0;

function playGame() {
// give player prompt and choices
var PlayerChoice = prompt("Janken is the Japanese name for 'Rock Paper Scissors.'\nLet's play Janken!\nPick r for rock, p for paper, and s for scissors.");

if (prompt === false) {
    text = "Maybe Next time!";
} else {
    playGame();
}

// computer chooses R, P, or S.
var choices = ["r", "p", "s"];

var computerChoice = choices [Math.floor (Math.random() * choices.length)];

// Game play, score tally, and asking if player wants to play again
if (PlayerChoice === computerChoice) {
    tie++;
    confirm("You chose " + PlayerChoice +" and the Computer chose " + computerChoice + ". It was a tie!\nPlayer: " + playerScore + "\nComputer: " + computerScore + "\nTies " + tie + "\nDo you want to play again?.");
    tie++;
} else if (
(PlayerChoice === "r" && computerChoice === "s") ||
(PlayerChoice === "s" && computerChoice === "p") ||
(PlayerChoice === "p" && computerChoice === "r") ) {
    playerScore++;
    confirm("You chose " + PlayerChoice +" and the Computer chose " + computerChoice + ". You Win!\nPlayer: " + playerScore + "\nComputer: " + computerScore + "\nTies " + tie + "\nDo you want to play again?.");
} else {
    computerScore++;
    confirm("You chose " + PlayerChoice +" and the Computer chose " + computerChoice + ". You Lose!\nPlayer: " + playerScore + "\nComputer: " + computerScore + "\nTies " + tie + "\nDo you want to play again?.");
}

if (confirm == false) {
    text = "Thanks for Playing!";
} else {
    playGame();
}

};

playGame();