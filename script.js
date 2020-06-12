let gameBoard = JSON.parse(localStorage.getItem("gameBoard"));
let players = JSON.parse(localStorage.getItem("players"));
let turn = JSON.parse(localStorage.getItem("GameTurn"));
if (gameBoard == null) {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
}
if (players == null) {
  players = [];
  form = document.getElementById("form");
  form.style.display = "flex";
}
if (turn == null) {
  turn = 0;
}

const Player = (name) => {
  const savePlayers = function save(players) {
    localStorage.setItem("players", JSON.stringify(players));
  };
  return { name, savePlayers };
};

function createPLayers() {
  form = document.getElementById("form");
  players.push(Player(form[0].value));
  players.push(Player(form[1].value));
  players[0].savePlayers(players);
  form.style.display = "none";
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
    winnerPositions.forEach((square) => {
      if (
        array[square[0]] === "X" &&
        array[square[1]] === "X" &&
        array[square[2]] === "X"
      ) {
        winner = players[0];
      } else if (
        array[square[0]] === "O" &&
        array[square[1]] === "O" &&
        array[square[2]] === "O"
      ) {
        winner = players[1];
      }
    });
  };

  const gameOver = () => {
    checkWinner(gameBoard);

    if (winner == null) {
      if (!gameBoard.includes("")) {
        div = document.getElementById("result");
        const para = document.createElement("P");
        const btn = document.createElement("BUTTON");
        btn.innerHTML = "Play Again";
        para.innerHTML = "Draw";
        div.append(para, btn);

        btn.addEventListener("click", () => {
          gameBoard = ["", "", "", "", "", "", "", "", ""];
          board.save(gameBoard);
          window.location.reload();
        });
      }
    } else {
      div = document.getElementById("result");
      const para = document.createElement("P");
      const btn = document.createElement("BUTTON");
      btn.innerHTML = "Play Again";
      para.innerHTML = `Congratulations, ${winner.name}! You won`;
      div.append(para, btn);

      btn.addEventListener("click", () => {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        board.save(gameBoard);
        turn = 0;
        saveTurn(turn);
        window.location.reload();
        players = [];
        players.savePlayers(players);
      });
    }
  };

  const ifGameOver = () => {
    if (winner !== null) {
      return true;
    } else {
      return false;
    }
  };
  return { turnChange, turn, gameOver, ifGameOver };
};

let game = Game(turn);

const board = (() => {
  const boardTable = document.getElementsByClassName("position");
  const gameEnds = () => {
    if (game.ifGameOver()) {
      disable();
    }
  };

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
  const disable = () => {
    const btns = document.getElementsByClassName("board-cell");
    [...btns].forEach((btn) => {
      btn.setAttribute("class", "disabled");
    });
  };

  const draw = () => (
    [...boardTable].forEach((square, index) => {
      decide(square, index);
    }),
    game.gameOver(),
    gameEnds()
  );
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
  return { updateBoard, initialize, save };
})();

board.initialize();
