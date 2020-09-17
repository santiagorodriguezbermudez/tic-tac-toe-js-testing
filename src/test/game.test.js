import GameLogic from '../js/game';

window.alert = jest.fn();

let spy;
beforeAll(() => {
  spy = jest.spyOn(document, 'getElementById');
});

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

test('The user cannot play in an invalid cell', () => {
  const mockElement = document.createElement('div');
  mockElement.id = '1';
  mockElement.innerHTML = 'X';
  spy.mockReturnValue(mockElement);
  window.alert.mockReturnValue('This option has been taken. Please select an empty option.');
  GameLogic.playerInput();
  expect(window.alert.mock.results[0].value).toBe('This option has been taken. Please select an empty option.');
});
