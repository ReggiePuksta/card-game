var HandController = function(model, view) {
  this.model = model;
  this.view = view;
};
/**
 * Resolve cards Ids from the model and create individual
 * card views for the players hand
 */
HandController.prototype.init = function(cardsStorage) {
  // TODO check that we actualy receive CardsStorage object
  var cardsInHand = this.model.cardsIds;
  var cards = cardsStorage.findByInternalId(cardsInHand);
  this.model.add(cards);
  this.view.render(cards);
};
HandController.prototype.getCard = function() {
  var selectedCardId = this.view.selectedCard.id;
  var card = cardsStorage.get(selectedCardId);
};
// TODO we should preload events ?
HandController.prototype.activateEvents = function() {
  this.view.on("click",
    this.handHandler.bind(this));
  this.view.on("hover",
    this.hoverHandHandler.bind(this));
};
/**
 * When we click on the card inside the hand we have to activate
 * highlight mode. It shows possible positions for the card on the board.
 * We need cardData and BoardData
 *
 */
HighlightMode = function(card) {

};

module.exports = HandController;
