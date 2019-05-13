define(function(require) {
  'use strict';
  var CardFactory = require('CardFactory');
  var CardModel = require('CardModel');
  var CardController = require('CardController');
  var CardView = require('CardView');
  cardFactory = new CardFactory();

  var CardsStorage = function() {
    this.cards = [];
  };
  CardsStorage.prototype.init = function(cardsData) {
    for (var i = 0, len = cardsData.length; i < len; i++) {
      var cardModel = new CardModel(cardsData[i]);
      var cardView = new CardView(cardsData[i].type);
      var cardController = new CardController(cardModel, cardView);
      cardController.strategy(cardsData[i].strategy);
      this.cards.push({
        id: cardsData[i].id,
        internalId: cardsData[i].internalId,
        type: cardsData[i].type,
        pos: cardsData[i].pos,
        name: cardsData[i].name,
        cost: cardsData[i].cost,
        stats: cardsData[i].stats,
        hp: cardsData[i].hp,
        instance: cardController
      });
    }
  };
  CardsStorage.prototype.findByInternalId = function(id) {
    this.cards.forEach(function(card, index) {
      if (card.internalId === id) {
        return card;
      }
    });
  };

  /*
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
    */

});
