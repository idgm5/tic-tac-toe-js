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

  const checkWinner = (array, players) => {
    winnerPositions.forEach((square) => {
      const [firstSquare, secondSquare, thirdSquare] = square;
      const [firstPlayer, secondPlayer] = players;

      if (
        array[firstSquare] === 'X' &&
        array[secondSquare] === 'X' &&
        array[thirdSquare] === 'X'
      ) {
        winner = firstPlayer;
      } else if (
        array[firstSquare] === 'O' &&
        array[secondSquare] === 'O' &&
        array[thirdSquare] === 'O'
      ) {
        winner = secondPlayer;
      }
    });
  };

  const gameOver = (gameBoard, players) => {
    checkWinner(gameBoard, players);
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

module.exports = Game;
