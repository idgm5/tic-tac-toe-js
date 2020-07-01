const Game = (turn) => {
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
    let winnerToReturn = null;
    winnerPositions.forEach((square) => {
      const [firstSquare, secondSquare, thirdSquare] = square;
      const [firstPlayer, secondPlayer] = players;

      if (
        array[firstSquare] === 'X'
        && array[secondSquare] === 'X'
        && array[thirdSquare] === 'X'
      ) {
        winnerToReturn = firstPlayer;
      } else if (
        array[firstSquare] === 'O'
        && array[secondSquare] === 'O'
        && array[thirdSquare] === 'O'
      ) {
        winnerToReturn = secondPlayer;
      }
    });
    return winnerToReturn;
  };

  const assignSymbol = (playerInTurn) => {
    if (playerInTurn === 0) {
      return 'X';
    }
    return 'O';
  };

  return {
    turnChange,
    turn,
    checkWinner,
    assignSymbol,
  };
};

module.exports = Game;
