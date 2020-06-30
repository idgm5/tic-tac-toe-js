const Game = require('../src/game.js');

it('Changes the value of turn to 1 from 0', () => {
  var game = Game(0);
  game.turnChange(0);
  let newTurn = JSON.parse(localStorage.getItem('GameTurn'));
  expect(newTurn).toBe(1);
});

it('Changes the value of turn to 0 from 1', () => {
  var game = Game(1);
  game.turnChange(1);
  let newTurn = JSON.parse(localStorage.getItem('GameTurn'));
  console.log(newTurn);
  expect(newTurn).toBe(0);
});
