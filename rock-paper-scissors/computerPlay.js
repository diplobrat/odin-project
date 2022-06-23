const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
  return choices[Math.floor(Math.random()*choices.length)];
};

// to do: introduce a "predict" function that takes the history of the player's choice
// and produces an output which is most likely to beat the player's next choice

module.exports = computerPlay;
