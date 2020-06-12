let gameBoard = JSON.parse(localStorage.getItem("gameBoard"));
let players = JSON.parse(localStorage.getItem("players"));
let turn = JSON.parse(localStorage.getItem("GameTurn"));
if (gameBoard == null) {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
}
if (players == null) {
  players = [];
}
if (turn == null) {
  turn = 0;
}

const Player = (name, symbol) => {
  return { name, symbol };
};

players = [Player("A", "X"), Player("B", "O")];

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
    localStorage.setItem("GameTurn", JSON.stringify(array));
  };

  const turnChange = (turn) => {
    if (turn == 0) {
      turn = 1;
    } else {
      turn = 0;
    }
    saveTurn(turn);
  };

  const checkWinner = (array) => {
    winnerPositions.forEach;
  };

  return { turnChange, turn };
};

let game = Game(turn);

const board = (() => {
  const boardTable = document.getElementsByClassName("position");

  function assignSymbol(playerInTurn) {
    if (playerInTurn == 0) {
      return "X";
    } else {
      return "O";
    }
  }

  function decide(square, index) {
    if (gameBoard[index] == "X") {
      const para = document.createElement("P");
      para.innerHTML = "X";
      square.appendChild(para);
    } else if (gameBoard[index] == "O") {
      const para = document.createElement("P");
      para.innerHTML = "O";
      square.appendChild(para);
    } else {
      const btn = document.createElement("BUTTON");
      btn.innerHTML = "Push here";
      btn.setAttribute("class", "board-cell");
      btn.setAttribute("data", `${index}`);
      btn.addEventListener("click", board.updateBoard);
      square.appendChild(btn);
    }
  }

  const draw = () =>
    [...boardTable].forEach((square, index) => {
      decide(square, index);
    });

  const initialize = () => {
    return draw();
  };

  const save = function save(array) {
    localStorage.setItem("gameBoard", JSON.stringify(array));
  };

  const updateBoard = (btn) => (
    (gameBoard[btn.target.attributes.data.value] = assignSymbol(game.turn)),
    save(gameBoard),
    game.turnChange(turn),
    window.location.reload()
  );
  return { updateBoard, initialize };
})();

board.initialize();
