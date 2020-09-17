import Player from '../js/player';

test('Player has a name', () => {
  const player = Player('User', 'X');
  expect(player.name).toBe('User');
});

test('Player has a token', () => {
  const player = Player('User', 'X');
  expect(player.token).toBe('X');
});

test('Player is an object', () => {
  const player = Player('User', 'X');
  expect(typeof player).toBe('object');
});
