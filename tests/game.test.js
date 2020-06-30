const Game = require('../src/game.js');
const Player = require('../src/player.js');

it('changes the value of turn to 1 from 0', () => {
  const game = Game(0);
  game.turnChange(0);
  const newTurn = JSON.parse(localStorage.getItem('GameTurn'));
  expect(newTurn).toBe(1);
});

it('changes the value of turn to 0 from 1', () => {
  const game = Game(1);
  game.turnChange(1);
  const newTurn = JSON.parse(localStorage.getItem('GameTurn'));
  expect(newTurn).toBe(0);
});

it('returns player 1 as a winner', () => {
  const gameBoard = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']; // Player 1 wins
  const players = [Player('A'), Player('B')];
  const game = Game(0);
  const check = game.checkWinner(gameBoard, players);

  expect(check).toBe(players[0]);
});

it('returns player 2 as a winner', () => {
  const gameBoard = ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']; // Player 2 wins
  const players = [Player('A'), Player('B')];
  const game = Game(0);
  const check = game.checkWinner(gameBoard, players);

  expect(check).toBe(players[1]);
});

it('returns null for no winners', () => {
  const gameBoard = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O']; // Draw
  const players = [Player('A'), Player('B')];
  const game = Game(0);
  const check = game.checkWinner(gameBoard, players);

  expect(check).toBe(null);
});

it('Assign an X if it is player 1 turn', () => {
  const game = Game(0);
  const symbol = game.assignSymbol(0);
  expect(symbol).toBe('X');
});

it('Assign an O if it is player 1 turn', () => {
  const game = Game(1);
  const symbol = game.assignSymbol(1);
  expect(symbol).toBe('O');
});
