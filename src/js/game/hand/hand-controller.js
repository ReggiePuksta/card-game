var HandController = function(model, view) {
  this.model = model;
  this.view = view;
};
/**
 * Resolve cards Ids from the model and create individual
 * card views for the players hand
 */
HandController.prototype.init = function() {
  // TODO check that we actualy receive CardsStorage object
  var cardsInHand = this.model.cardsIds;
  var cards = this.model.findByInternalId(cardsInHand);
  this.model.add(cards);
  this.view.render(cards);
};
HandController.prototype.getCard = function() {
  var selectedCardId = this.view.selectedCard.id;
  var card = this.model.get(selectedCardId);
};
// TODO we should preload events ?
// Preloading could be done by activating events inside contstructor.
HandController.prototype.activateEvents = function() {
  this.view.on("click",
    this.clickHandler.bind(this));
  this.view.on("hover",
    this.hoverHandler.bind(this));
};
// TODO check how to dissable events
HandController.prototype.disableEvents= function() {
  this.view.on("click",
    this.clickHandler.bind(this));
  this.view.on("hover",
    this.hoverHandler.bind(this));
};
HandController.prototype.clickHandler= function(e) {
  var target = e.target;
  var selectedCardId = this.view.selectedCard.id;
  var card = this.model.get(selectedCardId);
};
HandController.prototype.hoverHandler= function(e) {
  var selectedCardId = this.view.selectedCard.id;
  var card = this.model.get(selectedCardId);
};
HandController.prototype.keyPressHandler= function(e) {
  var selectedCardId = this.view.selectedCard.id;
  var card = this.model.get(selectedCardId);
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
