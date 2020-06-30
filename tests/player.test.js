const Player = require('../src/player.js');

it('substracts the values provided from the first element', () => {
  var player = Player("test");
  expect(player.name).toBe("test");
});
