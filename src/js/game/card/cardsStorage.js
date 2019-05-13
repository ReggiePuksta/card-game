define(function(require) {
    var CardsStorage = function() {
        this.cardsInstancesList = {};
    };
    CardsStorage.prototype.buildOne = function(cardData) {
        var cardModel = new CardModel();
        cardModel.setup(cardData);
        var cardView = new CardView();
        var card = new CardController(cardModel, cardView);
        return card;
    };
    CardsStorage.prototype.buildAllHand = function(cardsDataArray) {
        for (var i = 0, len = cardsDataArray.length; i < len; i++) {
            this.cardsInstanceList[cardsDataArray.cardDeckId] = this.buildOne(cardsDataArray);
        }
    };

});
