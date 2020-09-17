import GameBoard from '../js/board';

window.alert = jest.fn();
window.prompt = jest.fn().mockReturnValue('User');

test('getMovesArray return an empty array', () => {
  GameBoard.resetMovesArray();
  expect(GameBoard.getMovesArray()).toStrictEqual(['', '', '', '', '', '', '', '', '']);
});

test('updateMovesArray update movesArray with the player token', () => {
  GameBoard.resetMovesArray();
  GameBoard.updateMovesArray(5, 'X');
  expect(GameBoard.getMovesArray()).toStrictEqual(['', '', '', '', '', 'X', '', '', '']);
});

test('resetMovesArray reset movesArray', () => {
  GameBoard.resetMovesArray();
  expect(GameBoard.getMovesArray()).toStrictEqual(['', '', '', '', '', '', '', '', '']);
});

test('User input for name is correct', () => {
  GameBoard.getPlayerName();
  expect(GameBoard.getPlayerName()).toBe('User');
});

test('User input for token works', () => {
  GameBoard.getPlayerName();
  window.prompt.mockReturnValue('x');
  expect(GameBoard.getPlayerSymbol(['x', 'o'])).toBe('x');
});
