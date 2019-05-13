define(function(require) {
    var HandController = function(model, view) {
        this.model = model;
        this.view = view;
        this.cards = [];
    };
  /**
   * Resolve cards Ids from the model and create individual 
   * card views for the players hand
   */
    HandController.prototype.init = function(cardsStorage) {
        // TODO check that we actualy receive CardsStorage object
        var cardsInHand = this.model.cardsIds;
        var cards = cardsStorage.findByInternalId(cardsInHand);
        this.cards.push(cards);
        this.view.render(this.cards);
    };
    HandController.prototype.place = function() {
        var selectedCard = this.view.selectedCard;
        selectedCard.place();
    };
});
