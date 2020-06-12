let gameBoard = JSON.parse(localStorage.getItem("gameBoard"));
let players = JSON.parse(localStorage.getItem("players"));
if (gameBoard == null) {
  gameBoard = ["", "O", "", "", "", "", "", "", ""];
}
if (players == null) {
  players = [];
}

const Player = (name, symbol) => {
  console.log({ name, symbol });
  return { name, symbol };
};

players = [Player("A", "X"), Player("B", "O")];

const board = (() => {
  const boardTable = document.getElementsByClassName("position");

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

  const updateBoard = (btn) => (console.log(btn), (board[btn] = "X"), draw());
  return { updateBoard };
})();

board.updateBoard(gameBoard, 2, players[0].symbol);
