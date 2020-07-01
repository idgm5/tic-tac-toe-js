
const Player = (name) => {
  const savePlayers = function save(players) {
    localStorage.setItem('players', JSON.stringify(players));
  };
  return { name, savePlayers };
};

module.exports = Player;
