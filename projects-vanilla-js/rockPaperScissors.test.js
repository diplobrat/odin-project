const computerPlay = require("./rockPaperScissors");

test("computerPlay() returns a non-null/undefined value", () => {
    expect(computerPlay()).not.toBeUndefined();
    expect(computerPlay()).not.toBeNull();
});

test("computerPlay() returns rock, paper, or scissors", () => {
  const expected = ["rock", "paper", "scissors"]
  expect(expected).toContain(computerPlay());
});
