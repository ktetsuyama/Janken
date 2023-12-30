// Start of game
var playerScore = 0
var computerScore = 0
var ties = 0

// give player prompt and choices
var PlayerChoice = prompt("Let's play Rock Paper Scissors! Pick r for rock, p for paper, and s for scissors.");


// computer chooses R, P, or S.
var choices = ["r", "p", "s"];

var computerChoice = choices [Math.floor (Math.random() * choices.length)];

// Game play
if (PlayerChoice === "r" && computerChoice === "s") {
    confirm("You chose rock and the Computer chose scissors. You Win! Hit Ok to see score.");
} else if (PlayerChoice === "s" && computerChoice === "p") {
    confirm("You chose scissors and the Computer chose paper. You Win! Hit Ok to see score.");
} else if (PlayerChoice === "p" && computerChoice === "r") {
    confirm("You chose paper and the Computer chose rock. You Win! Hit Ok to see score.");
} else if (PlayerChoice === "r" && computerChoice === "p") {
    confirm("You chose rock and the Computer chose paper. You Lose! Hit Ok to see score.");
} else if (PlayerChoice === "s" && computerChoice === "r") {
    confirm("You chose scissors and the Computer chose rock. You Lose! Hit Ok to see score.");
} else if (PlayerChoice === "p" && computerChoice === "s") {
    confirm("You chose Paper and the Computer chose scissors. You Lose! Hit Ok to see score.");
} else {
    confirm("It was a tie! Hit Ok to see score.")
}

for(var i=0; i < gamesPlayed; i++) {

}