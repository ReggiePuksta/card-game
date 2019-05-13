define(function(require) {
  /**
   * Small wrapper to make it easier to create new cards
   * TODO Put this function in another relative class
   */
 var CardFactory = function() {
 };
  CardFactory.prototype.buildForHand = function(cardData) {
    var cardModel = new CardModel();
    cardModel.setup(cardData);
    cardModel.pos('hand');
    var cardView = new CardView();
    var card = new CardController(cardModel, cardView);
    return card;
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
  
});
