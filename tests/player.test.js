const Player = require('../src/player.js');

it('Creates player with name provided', () => {
  const player = Player('test');
  expect(player.name).toBe('test');
});

it('Saves players array in local storage', () => {
  const player = Player('test');
  player.savePlayers(['player1']);
  const localStorageResult = JSON.parse(localStorage.getItem('players'));
  expect(localStorageResult).toMatchObject(['player1']);
});
