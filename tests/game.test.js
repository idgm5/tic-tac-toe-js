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

it('returns player 1 as a winner', () => {
  let gameBoard = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']; // Player 1 wins
  let players = [Player('A'), Player('B')];
  let game = Game(0);
  var check = game.checkWinner(gameBoard, players);

  expect(check).toBe(players[0]);
});

it('returns player 2 as a winner', () => {
  let gameBoard = ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']; // Player 2 wins
  let players = [Player('A'), Player('B')];
  let game = Game(0);
  var check = game.checkWinner(gameBoard, players);

  expect(check).toBe(players[1]);
});

it('returns null for no winners', () => {
  let gameBoard = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O']; // Draw
  let players = [Player('A'), Player('B')];
  let game = Game(0);
  var check = game.checkWinner(gameBoard, players);

  expect(check).toBe(null);
});

it('Assign an X if it is player 1 turn', () => {
  let game = Game(0);
  let symbol = game.assignSymbol(0);
  expect(symbol).toBe('X');
});

it('Assign an O if it is player 1 turn', () => {
  let game = Game(1);
  let symbol = game.assignSymbol(1);
  expect(symbol).toBe('O');
});
