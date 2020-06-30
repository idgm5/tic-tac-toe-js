const Player = require('../src/player.js');

it('Creates player with name provided', () => {
  var player = Player('test');
  expect(player.name).toBe('test');
});

it('Saves players array in local storage', () => {
  var player = Player('test');
  player.savePlayers(['player1']);
  let localStorageResult = JSON.parse(localStorage.getItem('players'));
  expect(localStorageResult).toMatchObject(['player1']);
});
