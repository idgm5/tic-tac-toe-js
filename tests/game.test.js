const Game = require('../src/game.js');
const Player = require('../src/player.js');

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

it('Evaluates if a player won', () => {
    let gameBoard = ['X', 'O', 'X', 'X', 'X', 'O', '', '', '']; // Player 1 wins
    let players = [Player('A'), Player('B')];

    document.body.innerHTML = `<div id="result" /> </div>`;
    const result = document.getElementById('result');

    let game = Game(0);
    game.gameOver(gameBoard, players);

    expect(result.innerHTML).toBe('<p>Congratulations, A! You won</p><button>Play Again</button>')
});
