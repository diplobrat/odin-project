const prompt = require('prompt-sync')();
const choices = ['rock', 'paper', 'scissors'];
var playerChoice = prompt("Rock, Paper, or Scissors? >").toLowerCase();

function computerPlay() {
  return choices[Math.floor(Math.random()*choices.length)];
}

var computerChoice = computerPlay();

function play(playerChoice, computerChoice) {
  console.log(`You chose ${playerChoice}`);
  console.log(`Computer chose ${computerChoice}`)

  // check if it's a tie
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

    // check for rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        return 'You win!';
      } else {
        return 'Computer wins!';
      }
    }

    // check for paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'You win!';
      } else {
        return 'Computer wins!';
      }
    }

    // check for scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return 'You win!';
      } else {
        return 'Computer wins!';
      }
    }
}

console.log(play(playerChoice, computerChoice));

module.exports = computerPlay;
