const View = require('../src/ttt-view.js');// require appropriate file
const Game = require('../src/game.js');// require appropriate file

  $(() => {
    // Your code here
    const game = new Game();
    const ele  = $('.ttt');
    const view = new View(game, ele);
    
  });
