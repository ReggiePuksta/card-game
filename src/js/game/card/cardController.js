var CardController = function(cardModel, cardView) {
  this.model = cardModel;
  this.view = cardView;
};
CardController.prototype.createCard= function() {
  this.view.setUpTemplate(this.model.type);
  // Every time we change model property the value inside the
  // view tamplate will change automatically
};
CardController.prototype.riseHp = function(n) {
  this.model.addHp(n);
  this.view.addHp();
};
CardController.prototype.lowerHp = function(n) {
  this.model.reduceHp(n);
  this.view.reduceHp();
};
CardController.prototype.placeOnTheBoard = function() {
  // TODO Option: set up live pos property. CardsStorage would
  // change automatically.
  this.model.pos('board');
  cardsStorage.move(this, 'board');
};
CardController.prototype.placeInTheGraveyard = function() {
  this.model.pos('graveyard');
  CardsStorage.move(this,'graveyard');
};
CardController.prototype.modelEvents = function() {
  var that = this;
  Notifier.on('reduceHp', function(data) {
    that.view.reduceHp(data);
  });
  Notifier.on('increaseHp', function(data) {
    that.view.increaseHp(data);
  });
};
CardController.prototype.attachClientEvents = function() {};

module.exports = CardController;
