var HandService = function(models) {
  this.handModel = models.handModel;
  this.boardModel = models.boardModel;
  this.heroModel = models.heroModel;
};
HandService.prototype.checkAvailablePositions = function(id) {
  this.boardModel.checkAvailablePositions(id);
  Notifier.emit('showPositions', id);
};
HandService.prototype.getPlayableCards = function() {
  var cards = this.cardsStorage.getHandCards();
  var stats = this.statsModel.get();
  return this.handModel.checkHand(card, stats);

};
HandService.prototype.reduceCost = function(amount, type) {
  var cards = this.cardsStorage.getHandCards(type);
  this.handModel.reduceCost(cards);
  return this.handModel.checkHand(card, stats);

};
HandService.prototype.increaseCost = function(amount, type) {
  var cards = this.cardsStorage.getHandCards(type);
  this.handModel.reduceCost(cards);
  return this.handModel.checkHand(card, stats);
};
HandService.prototype.useCard = function(card, boardPosition) {
  var card = this.handModel.getCard(card);
  // First we need to check what to target
  Targetting.activation(card, function(target) {
    this.placeCard(card, target);
  });
}
HandService.prototype.placeCard = function(card, boardPosition) {
  var card = this.handModel.useCard(card);
  this.boardModel.place(card, boardPosition);
};