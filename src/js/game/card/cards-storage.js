var CardFactory = require('card-factory');
var cardFactory = new CardFactory();

var CardsStorage = function() {
  this.cards = [];
  this.id = 0;
};
CardsStorage.prototype.add = function(card) {
  this.id++;
  card.setStorageId(this.id);
  this.cards.push(card);
  return this.id;
};
CardsStorage.prototype.addMultiple = function(cards) {
  if (!Array.isArray(cards)) {
    return;
  }
  for (var i = 0, len = cards.length; i < len; i++) {
    this.id++;
    cards[i].setStorageId(this.id);
    this.cards.push(cards[i]);
  }
};
CardsStorage.prototype.init = function(cardsData) {
  for (var i = 0, len = cardsData.length; i < len; i++) {
    var card = cardsData[i];
    this.add(card);
  }
};
CardsStorage.prototype.getCard = function(id) {
  return this.cards[id];
};
CardsStorage.prototype.getHand = function() {
  return this.cards.filter(function(a) {
    return a.model.pos === 'hand';
  });
};
CardsStorage.prototype.getBoard = function(id) {
  return this.cards.filter(function(a) {
    return a.model.pos === 'board';
  });
};
CardsStorage.prototype.getGraveyard = function(id) {
  return this.cards.filter(function(a) {
    return a.model.pos === 'graveyard';
  });
};
CardsStorage.prototype.move = function(card, pos) {
  var id = card.storageId;
  this.getCard(id).model.pos = pos;
};
CardsStorage.prototype.reset = function() {
  this.cards = [];
};

module.exports = CardsStorage;
