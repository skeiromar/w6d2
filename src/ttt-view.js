class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $ul = $('ul');
    const self = this;
    $ul.on("click", function(event) { 
      console.log(event.target); 
      self.makeMove($(event.target));
    });
  }
  displayGIF() {
    const $image = $('#fun-gif');
    const $li = $("li");
    $image.show();
    $li.append($image);
    // `#show` removes the display:'none'
  };

  makeMove($square) {
    const move = $square;

    console.log(move.row);
    const pl = this.game.currentPlayer;
    this.game.playMove([parseInt(move.attr('row')), parseInt(move.attr('col'))]);
    $square.text(pl);
    $square.addClass(pl);
    if (this.game.isOver()) {
      const $fig = $(`<figcaption>${'You win, '+pl+'!'}</figcaption>`);
       const $tt = $('.ttt');
       $tt.append($fig);
    }
  }

  setupBoard() {
    const $ul = $('<ul>');
    this.$el.append($ul);
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        const $li = $(`<li row=${rowIdx} col=${colIdx}></li>`);
        $li.data("pos", [rowIdx, colIdx]);
        $ul.append($li);
      }
    }
  }
}

module.exports = View;
