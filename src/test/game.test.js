import GameLogic from '../js/game';

test('Updates the options of tokens accordingly', () => {
  const tokens = ['x', 'o', '#', '$', '@', '!'];
  expect(GameLogic.updateTokens('x', tokens)).toStrictEqual(['o', '#', '$', '@', '!']);
});