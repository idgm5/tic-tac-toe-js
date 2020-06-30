const Board = (gameBoard) => {
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
    if (winner !== null) {
      disable();
    }
  };

  const draw = () => {
    [...boardTable].forEach((square, index) => {
      decide(square, index);
    });
    winner = game.checkWinner(gameBoard, players);
    console.log(winner);
    console.log(game.checkWinner(gameBoard, players));

    if (winner == null) {
      if (!gameBoard.includes('')) {
        const div = document.getElementById('result');
        console.log(div.innerHTML);
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
};

module.exports = Board;
