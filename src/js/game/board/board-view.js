define(function(require) {
  var BoardView = function() {};
  BoardView.prototype.displayBoard = function() {
      //Load the HTML
      Template.show("board");
      Notifier.on("initBoardData", function(data) {
          this.displayDynamicContent(data);
      });
  };
  BoardView.prototype.targetModeBoard = function() {
      this.mode = "targeting";
  };
  BoardView.prototype.targetModePlace = function(card) {
      this.getFreeSlots();
      this.mode = "targeting";
  };
  BoardView.prototype.animatePlacement = function() {
      activeCard = this.hand.active;
      selectedPos = this.board.active;
      animation.placement(activeCard, selectedPos);
  };
  BoardView.prototype.addComponent = function(comp) {
      this.components.push(comp);
  };
  BoardView.prototype.updateCards = function(comp) {
      Notifier.on('changed', function(data) {
          data.forEach(function(i, a) {
              this.positions[a];
          });
      });
  };
  BoardView.prototype.displayDynamicContent = function(data) {
      this.displayHero(data.hero);
      this.displayHand(data.hand);
  };
  BoardView.prototype.displayHand = function(data) {
      Template.partial("hand", data);
  };
  BoardView.prototype.displayHero = function(data) {
      Template.partial("hero", data);
  };
});
