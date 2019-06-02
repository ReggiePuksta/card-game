var cardFactory = new CardFactory();

var init = function(cardsData, cardsStorage) {
  buildHand(cardsData, cardsStorage);
};

var buildHand = function(cardsData, cardsStorage) {
  for (var i = 0, len = cardsData.length; i < len; i++) {
    var card = cardFactory.build(cardsData[i], 'hand');
    cardsStorage.add(card);
  }
};

exports = init;

