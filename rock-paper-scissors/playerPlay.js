// require prompt
const prompt = require('prompt-sync')();
let choice;

function playerPlay () {
  do {
    choice = prompt('Rock, Paper, or Scissors? > ').toLowerCase();
    while (choice != 'rock' && choice != 'paper' && choice !='scissors') {
      console.log('Invalid choice | Type Rock, Paper, or Scissors');
      choice = prompt('Rock, Paper, or Scissors? > ').toLowerCase();
    };
  } while (choice != 'rock' && choice != 'paper' && choice !='scissors');
  return choice;
};

module.exports = playerPlay;
