// import containerized modules
var computerPlay = require('./computerPlay');
var playerPlay = require('./playerPlay');

// require prompt
const prompt = require('prompt-sync')();

// prompt user for how long they want to play
let gameLength = parseInt(prompt('Choose best out of 3 or 5! > '));

// initialize computerChoice and PlayerChoice
let computerChoice;
let playerChoice;

// initialize score
let yourScore = 0;
let computerScore = 0;

// play a game of rock paper scissors
function play() {
  computerChoice = computerPlay();
  playerChoice = playerPlay();

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
        return `You win! Your score ${yourScore}, computer score: ${computerScore}`;;
      } else {
        computerScore ++;
        return `You lose! Your score ${yourScore}, computer score: ${computerScore}`;
      }
    }

    // check for paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'rock') {
        yourScore ++;
        return `You win! Your score ${yourScore}, computer score: ${computerScore}`;;
      } else {
        computerScore ++;
        return `You lose! Your score ${yourScore}, computer score: ${computerScore}`;
      }
    }

    // check for scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'paper') {
        yourScore ++;
        return `You win! Your score ${yourScore}, computer score: ${computerScore}`;;
      } else {
        computerScore ++;
        return `You lose! Your score ${yourScore}, computer score: ${computerScore}`;
      }
    }
}

function gameLoop() {
  while (
    yourScore < Math.round(gameLength/2) &&
    computerScore < Math.round(gameLength/2)
    ) {console.log(play());
  }
}

if (gameLength === 3 || gameLength === 5) {
  gameLoop();
} else {
  while (gameLength != 3 && gameLength != 5) {
    console.log('Invalid choice | Type 3 or 5');
    gameLength = parseInt(prompt('Choose best out of 3 or 5! > '));
    if (gameLength === 3 || gameLength === 5) {
      gameLoop();
    }
  };
}

module.exports = play;
