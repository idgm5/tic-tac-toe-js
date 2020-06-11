let gameBoard = JSON.parse(localStorage.getItem("gameBoard"));
let players = JSON.parse(localStorage.getItem("players"));
if (gameBoard == null) {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
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
  const updateBoard = (board, position, symbol) => (board[position] = symbol);

  return { updateBoard };
})();

board.updateBoard(gameBoard, 5, players[0].symbol);

console.log(gameBoard);
