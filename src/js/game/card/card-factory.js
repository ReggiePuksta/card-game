/**
 * Small wrapper to make it easier to create new cards
 * TODO Put this function in another relative class
 */
var CardFactory = function() {
};
CardFactory.prototype.build = function(cardData, placement) {
  var cardModel = new CardModel();
  cardModel.setup(cardData);
  cardModel.placement(placement);
  var cardView = new CardView();
  // TODO make a new copy every time we request a template
  var template = templateStorage.get('card-' + cardData.type);
  // TODO To remove redundant scanning for each fragment copy. 
  // Bindable list should return locations to nodes, instead
  // of nodes itself?
  Binder.bind(cardModel, template);
  cardView.setUpTemplate(template);
  var card = new CardController(cardModel, cardView);
  CardsStorage.add(card);
  return card;
};
var preBind = function() {
  Binder.scanForNodeLocation();
};
CardFactory.prototype.buildForBoard = function(cardData, pos) {
  var cardModel = new CardModel();
  cardModel.setup(cardData);
  if (pos) {
    cardModel.pos(pos);
  }
  var cardView = new CardView();
  var card = new CardController(cardModel, cardView);
  return card;
};

module.exports = CardFactory;
