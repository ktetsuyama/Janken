// Start of game
var playerScore = 0;
var computerScore = 0;
var tie = 0;
var plays = 0;

function playGame() {
  // give player prompt and choices
  var PlayerChoice = prompt(
    "Janken is the Japanese name for 'Rock Paper Scissors.\nLet's play Janken!\nPick r for rock, p for paper, and s for scissors."
  );

  // computer chooses R, P, or S.
  var choices = ["r", "p", "s"];

  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  var playAgain = false;

  // Game play, score tally, and asking if player wants to play again
  if (PlayerChoice === computerChoice) {
    tie++;
    plays++;
    playAgain = confirm(
      "You chose " +
        PlayerChoice +
        " and the Computer chose " +
        computerChoice +
        ". It was a tie!\nPlayer: " +
        playerScore +
        "\nComputer: " +
        computerScore +
        "\nTies " +
        tie +
        "\nYou have played this game " +
        plays +
        " times.\nDo you want to play again?."
    );
  } else if (
    (PlayerChoice === "r" && computerChoice === "s") ||
    (PlayerChoice === "s" && computerChoice === "p") ||
    (PlayerChoice === "p" && computerChoice === "r")
  ) {
    playerScore++;
    plays++;
    playAgain = confirm(
      "You chose " +
        PlayerChoice +
        " and the Computer chose " +
        computerChoice +
        ". You Win!\nPlayer: " +
        playerScore +
        "\nComputer: " +
        computerScore +
        "\nTies " +
        tie +
        "\nYou have played this game " +
        plays +
        " times.\nDo you want to play again?."
    );
  } else {
    computerScore++;
    plays++;
    playAgain = confirm(
      "You chose " +
        PlayerChoice +
        " and the Computer chose " +
        computerChoice +
        ". You Lose!\nPlayer: " +
        playerScore +
        "\nComputer: " +
        computerScore +
        "\nTies " +
        tie +
        "\nYou have played this game " +
        plays +
        " times.\nDo you want to play again?."
    );
  }

  if (playAgain === false) {
    alert("Thanks for Playing!");
  } else {
    playGame();
  }
}

playGame();
