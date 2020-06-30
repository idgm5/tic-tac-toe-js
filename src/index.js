import './stylesheet.css';

const Player = require('./player.js');
const Game = require('./game');

let gameBoard = JSON.parse(localStorage.getItem('gameBoard'));
let players = JSON.parse(localStorage.getItem('players'));
let turn = JSON.parse(localStorage.getItem('GameTurn'));
let winner = null;
if (gameBoard == null) {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
}
if (players == null) {
  players = [];
  const form = document.getElementById('form');
  form.style.display = 'flex';
  const tableBoard = document.getElementById('board-table');
  tableBoard.style.display = 'none';
}
if (turn == null) {
  turn = 0;
}

const game = Game(turn);

const boardTable = document.getElementsByClassName('position');

const currentPlayer = () => {
  if (!(players === null || players.length === 0)) {
    if (turn === 0) {
      const currentPlayer = document.createElement('P');
      const div = document.getElementById('result');
      currentPlayer.innerHTML = `Player ${players[0].name}`;
      div.appendChild(currentPlayer);
    } else {
      const currentPlayer = document.createElement('P');
      const div = document.getElementById('result');
      currentPlayer.innerHTML = `Player ${players[1].name}`;
      div.appendChild(currentPlayer);
    }
  }
};

const save = function save(array) {
  localStorage.setItem('gameBoard', JSON.stringify(array));
};

const updateBoard = (btn) => {
  gameBoard[btn] = game.assignSymbol(game.turn);
  save(gameBoard);
  game.turnChange(turn);
  window.location.reload();
};

function decide(square, index) {
  if (gameBoard[index] === 'X') {
    const para = document.createElement('P');
    para.innerHTML = 'X';
    square.appendChild(para);
  } else if (gameBoard[index] === 'O') {
    const para = document.createElement('P');
    para.innerHTML = 'O';
    square.appendChild(para);
  } else {
    const btn = document.createElement('BUTTON');
    btn.setAttribute('class', 'board-cell');
    btn.setAttribute('data', `${index}`);
    btn.addEventListener('click', () => updateBoard(index));
    square.appendChild(btn);
  }
}

const disable = () => {
  const btns = document.getElementsByClassName('board-cell');
  [...btns].forEach((btn) => {
    btn.setAttribute('class', 'disabled');
  });
};

const gameEnds = () => {
  if (winner !== null) {
    disable();
  }
};

const draw = () => {
  [...boardTable].forEach((square, index) => {
    decide(square, index);
  });
  winner = game.checkWinner(gameBoard, players);

  if (winner == null) {
    if (!gameBoard.includes('')) {
      const div = document.getElementById('result');
      const para = document.createElement('P');
      const btn = document.createElement('BUTTON');
      btn.innerHTML = 'Play Again';
      para.innerHTML = 'Draw';

      btn.addEventListener('click', () => {
        localStorage.clear();
        window.location.reload();
      });
      div.append(para, btn);
    }
  } else {
    const div = document.getElementById('result');
    const para = document.createElement('P');
    const btn = document.createElement('BUTTON');
    btn.innerHTML = 'Play Again';
    para.innerHTML = `Congratulations, ${winner.name}! You won`;

    btn.addEventListener('click', () => {
      localStorage.clear();
      window.location.reload();
    });
    div.append(para, btn);
  }
  gameEnds();
  currentPlayer();
};

function createPlayers() {
  const form = document.getElementById('form');
  players.push(Player(form[0].value));
  players.push(Player(form[1].value));
  players[0].savePlayers(players);
  form.style.display = 'none';
}

const newPlayers = document.getElementById('submit-form');
newPlayers.addEventListener('click', createPlayers);

draw();
