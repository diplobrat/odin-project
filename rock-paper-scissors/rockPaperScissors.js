// import computer input from computerPlay module
var computerPlay = require('./computerPlay')

// require prompt
const prompt = require('prompt-sync')();

// prompt user for how long they want to play
const gameLength = parseInt(prompt('Choose best out of 3 or 5! > '));

// initialize computerChoice and PlayerChoice
let computerChoice;
let playerChoice;

// initialize score
let yourScore = 0;
let computerScore = 0;

// play a game of rock paper scissors
function play(playerChoice, computerChoice) {
  computerChoice = computerPlay();
  // prompt user for rock, paper, or scissors
  playerChoice = prompt('Rock, Paper, or Scissors? > ').toLowerCase();

  console.log(`You chose ${playerChoice}`);
  console.log(`Computer chose ${computerChoice}`);

  // check if it's a tie
  if (playerChoice === computerChoice) {
    return `It's a tie! Your score ${yourScore}, computer score: ${computerScore}`;
  }

    // check for rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        yourScore ++;
        return `You win! Your score ${yourScore}, computer score: ${computerScore}`;
      } else {
        computerScore ++;
        return `You lose! Your score ${yourScore}, computer score: ${computerScore}`;
      }
    }

    // check for paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'rock') {
        yourScore ++;
        return `You win! Your score ${yourScore}, computer score: ${computerScore}`;
      } else {
        computerScore ++;
        return `You lose! Your score ${yourScore}, computer score: ${computerScore}`;
      }
    }

    // check for scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'paper') {
        yourScore ++;
        return `You win! Your score ${yourScore}, computer score: ${computerScore}`;
      } else {
        computerScore ++;
        return `You lose! Your score ${yourScore}, computer score: ${computerScore}`;
      }
    }
}

while (
  yourScore < Math.round(gameLength/2) &&
  computerScore < Math.round(gameLength/2)
  ) {console.log(play(playerChoice, computerChoice));}

module.exports = play;
