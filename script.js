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

  const initialize = () => {
    return draw();
  };

  const save = function save(array) {
    localStorage.setItem('gameBoard', JSON.stringify(array));
  };

  const updateBoard = (btn) => ( gameBoard[btn.target.attributes.data.value] = "X", save(gameBoard), window.location.reload());
  return { updateBoard, initialize };
})();

board.initialize();
