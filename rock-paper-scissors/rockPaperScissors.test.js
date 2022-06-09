const play = require("./rockPaperScissors");

test("rock should beat scissors", () => {
    expect(play('rock', 'scissors')).toBe('You win!');
});

test("scissors should beat paper", () => {
  expect(play('scissors', 'paper')).toBe('You win!');
});

test("rock should lose to paper", () => {
  expect(play('rock', 'paper')).toBe('You lose!');
});

test("paper should tie with paper", () => {
  expect(play('paper', 'paper')).toBe("It's a tie!");
});
