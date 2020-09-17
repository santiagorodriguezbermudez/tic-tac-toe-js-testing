import GameBoard from '../js/board';

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
  GameBoard.resetMovesArray()
  expect(GameBoard.getMovesArray()).toStrictEqual(['', '', '', '', '', '', '', '', '']);
});
