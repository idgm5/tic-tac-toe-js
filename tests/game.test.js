const Game = require('../src/game.js');
const Player = require('../src/player.js');

it('changes the value of turn to 1 from 0', () => {
  var game = Game(0);
  game.turnChange(0);
  let newTurn = JSON.parse(localStorage.getItem('GameTurn'));
  expect(newTurn).toBe(1);
});

it('changes the value of turn to 0 from 1', () => {
  var game = Game(1);
  game.turnChange(1);
  let newTurn = JSON.parse(localStorage.getItem('GameTurn'));
  expect(newTurn).toBe(0);
});

it('evaluates if a player won', () => {
  let gameBoard = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']; // Player 1 wins
  let players = [Player('A'), Player('B')];
  let game = Game(0);
  var check = game.checkWinner(gameBoard, players);

  expect(check).toBe(players[0]);
});
