// import computer input from computerPlay module
var computerPlay = require('./computerPlay')

// assign computerChoice by invoking computerPlay
let computerChoice = computerPlay();

// prompt user for rock, paper, or scissors
const prompt = require('prompt-sync')();
var playerChoice = prompt('Rock, Paper, or Scissors? > ').toLowerCase();

// play a game of rock paper scissors
function play(playerChoice, computerChoice) {
  console.log(`You chose ${playerChoice}`);
  console.log(`Computer chose ${computerChoice}`);

  // check if it's a tie
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

    // check for rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        return 'You win!';
      } else {
        return 'You lose!';
      }
    }

    // check for paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'You win!';
      } else {
        return 'You lose!';
      }
    }

    // check for scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return 'You win!';
      } else {
        return 'You lose!';
      }
    }
}

console.log(play(playerChoice, computerChoice));

module.exports = play;
