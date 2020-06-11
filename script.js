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
  const para = document.createElement('P');
  const btn = document.createElement('BUTTON');
  console.log(boardTable);

  const draw = () => (
    [...boardTable].forEach((square, index) => {
      if(gameBoard[index] == "X"){
        para.innerHTML = "X";
        square.appendChild(para);
      } else if(gameBoard[index] == "O") {
        para.innerHTML = "O";
        square.appendChild(para);
      } else {
        square.appendChild(btn);
      }
    })
  )
  const updateBoard = (board, position, symbol) => ( board[position] = symbol,  draw() );
  return { updateBoard };

})();

board.updateBoard(gameBoard, 2, players[0].symbol);

console.log(gameBoard);
