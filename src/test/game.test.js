import GameLogic from '../js/game';

test('Updates the options of tokens accordingly', () => {
  const tokens = ['x', 'o', '#', '$', '@', '!'];
  expect(GameLogic.updateTokens('x', tokens)).toStrictEqual(['o', '#', '$', '@', '!']);
});

test('Return false if there is not a winning pattern.', () => {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];
  const boardArray = ['', '', '', '', '', '', '', '', ''];
  expect(GameLogic.checkPattern(winningPatterns, boardArray, 'x')).toBe(false);
});

test('Return true if there is not a winning pattern.', () => {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];
  const boardArray = ['x', '', '', '', 'x', '', '', '', 'x'];
  expect(GameLogic.checkPattern(winningPatterns, boardArray, 'x')).toBe(true);
});
