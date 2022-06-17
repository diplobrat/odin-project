const play = require("./rockPaperScissors");

test("rock should beat scissors", () => {
    expect(play('rock', 'scissors')).toContain('You win!');
});

test("scissors should beat paper", () => {
  expect(play('scissors', 'paper')).toContain('You win!');
});

test("rock should lose to paper", () => {
  expect(play('rock', 'paper')).toContain('You lose!');
});

test("paper should tie with paper", () => {
  expect(play('paper', 'paper')).toContain("It's a tie!");
});
