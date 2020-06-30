import './stylesheet.css';
const Player = require('./player.js');

let gameBoard = JSON.parse(localStorage.getItem('gameBoard'));
let players = JSON.parse(localStorage.getItem('players'));
let turn = JSON.parse(localStorage.getItem('GameTurn'));
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

const Game = (turn) => {
  let winner = null;
  const winnerPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  const saveTurn = function saveTurn(array) {
    localStorage.setItem('GameTurn', JSON.stringify(array));
  };

  const turnChange = (turn) => {
    if (turn === 0) {
      turn = 1;
    } else {
      turn = 0;
    }
    saveTurn(turn);
  };

  const checkWinner = (array) => {
    winnerPositions.forEach((square) => {
      const [firstSquare, secondSquare, thirdSquare] = square;
      const [firstPlayer, secondPlayer] = players;

      if (
        array[firstSquare] === 'X'
        && array[secondSquare] === 'X'
        && array[thirdSquare] === 'X'
      ) {
        winner = firstPlayer;
      } else if (
        array[firstSquare] === 'O'
        && array[secondSquare] === 'O'
        && array[thirdSquare] === 'O'
      ) {
        winner = secondPlayer;
      }
    });
  };

  const gameOver = () => {
    checkWinner(gameBoard);
    if (winner == null) {
      if (!gameBoard.includes('')) {
        const div = document.getElementById('result');
        const para = document.createElement('P');
        const btn = document.createElement('BUTTON');
        btn.innerHTML = 'Play Again';
        para.innerHTML = 'Draw';
        div.append(para, btn);

        btn.addEventListener('click', () => {
          localStorage.clear();
          window.location.reload();
        });
      }
    } else {
      const div = document.getElementById('result');
      const para = document.createElement('P');
      const btn = document.createElement('BUTTON');
      btn.innerHTML = 'Play Again';
      para.innerHTML = `Congratulations, ${winner.name}! You won`;
      div.append(para, btn);

      btn.addEventListener('click', () => {
        localStorage.clear();
        window.location.reload();
      });
    }
  };

  const ifGameOver = () => {
    if (winner !== null) {
      return true;
    }
    return false;
  };
  return {
    turnChange,
    turn,
    gameOver,
    ifGameOver,
  };
};

const game = Game(turn);

const board = (() => {
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

  function assignSymbol(playerInTurn) {
    if (playerInTurn === 0) {
      return 'X';
    }
    return 'O';
  }

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
      btn.addEventListener('click', board.updateBoard);
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
    if (game.ifGameOver()) {
      disable();
    }
  };

  const draw = () => {
    [...boardTable].forEach((square, index) => {
      decide(square, index);
    });
    game.gameOver();
    gameEnds();
    currentPlayer();
  };

  const initialize = () => draw();

  const save = function save(array) {
    localStorage.setItem('gameBoard', JSON.stringify(array));
  };

  const updateBoard = (btn) => {
    gameBoard[btn.target.attributes.data.value] = assignSymbol(game.turn);
    save(gameBoard);
    game.turnChange(turn);
    window.location.reload();
  };
  return { updateBoard, initialize, save };
})();

function createPlayers() {
  const form = document.getElementById('form');
  players.push(Player(form[0].value));
  players.push(Player(form[1].value));
  players[0].savePlayers(players);
  form.style.display = 'none';
}

const newPlayers = document.getElementById('submit-form');
newPlayers.addEventListener('click', createPlayers);

board.initialize();
