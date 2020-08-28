import Player from './player.js';
import GameBoard from './board.js';

const GameLogic = ((currentPlayer) => {
  const start = () => {
    let tokens = ['x', 'o', '#', '$', '@', '!'];

    var player1name = prompt('Please enter your name', 'Harry Potter');
    while (player1name == null || player1name == '') {
      player1name = prompt('Name cannot be empty, please provide one', 'John Doe');
    }
    alert(`Hello ${player1name}! Welcome to your tic-tac-toe game`);

    var player1symbol = prompt('Choose your token from the following options: x, o, #, $, @, !.', '').toLowerCase();
    while (!tokens.includes(player1symbol)) {
      player1symbol = prompt('Please select a valid option. Choose from: x, o, #, $, @, !.', '');
    }
    alert(`Cool! ${player1name}! Your token will be ${player1symbol}`);   

    var player2name = prompt('Please enter your name', 'Harry Potter');
    while (player1name == null || player2name == '') {
      player2name = prompt('Name cannot be empty, please provide one', 'John Doe');
    }
    alert(`Hello ${player2name}! Welcome to your tic-tac-toe game`);

    var player2symbol = prompt('Choose your token from the following options: x, o, #, $, @, !.', '').toLowerCase();
    while (!tokens.includes(player2symbol)) {
      player2symbol = prompt('Please select a valid option. Choose from: x, o, #, $, @, !.', '');
    }
    alert(`Cool! ${player2name}! Your token will be ${player2symbol}`);   

    let player1 = Player(player1name, player1symbol);
    let player2 = Player(player2name, player2symbol);

  };

  const beginTurn = (player) => {
    let playerTurn = document.createElement('p');
    playerTurn.innerHTML = `Hello player ${player.name}, this is your turn\n`;
    playerTurn.innerHTML += 'Please, select the cell you want to play';
    this.appendChild(playerTurn);
  }

  const evaluateWinner = () => {};
  
  const update = () => {};

  return {
    start,
    evaluateWinner,
    update
  }
})();

export default GameLogic;