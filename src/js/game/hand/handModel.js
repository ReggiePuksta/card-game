var HandModel = function(cardsStorage) {
    this.data = data;
    this.cardsIds = [];
};
/**
* init();
* HandModel initialisation function that uses provided raw data
* and 
*
*/
HandModel.prototype.init = function(cardsStorage) {
    this.cardsIds = this.data.initCardsList;
    // this.cardsIds = [24,2,5,62,10];
    cardsStorage.findByInternalId(this.cardsIds);
};
HandModel.prototype.add = function(card) {
    this.cardsIds.push(card);
};
HandModel.prototype.findById = function(card) {
    this.cardsIds.push(card);
};
HandModel.prototype.findByName = function(name) {
    // this.cardsIds
};
HandModel.prototype.findByType = function(type) {
    // this.cardsIds
};
// Return a list of available to play cards
HandModel.prototype.ableToBuy = function(cost) {
    this.cardsIds.push(card);
};
HandModel.prototype.length = function(card) {
    return this.cardsIds.length;
};
HandModel.prototype.remove = function(card) {
    this.cardsIds = this.data.initCardsList;
};
//Arrange according to mana prices
HandModel.prototype.arrange = function() {
    this.cardsIds = this.data.initCardsList;
};
// Check with server data
HandModel.prototype.validate = function(handlist) {
    Data.getHandlist(function(data) {
        if (this.handlist === data) {
            return true;
        }
        return false;
    });
};
var BoardService = function(models) {
    this.boardModel = models.boardModel;
    this.heroModel = models.heroModel;
};
BoardService.prototype.placeTheCard = function(id) {
  
};
BoardService.prototype.dealDamage= function(id) {
  
};


var HandService = function(models) {
    this.handModel = models.handModel;
    this.boardModel = models.boardModel;
    this.statsModel = models.statsModel;
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
HandService.prototype.reduceCost= function(amount, type) {
  var cards = this.cardsStorage.getHandCards(type);
  this.handModel.reduceCost(cards);
  return this.handModel.checkHand(card, stats);
  
};
HandService.prototype.increaseCost= function(amount, type) {
  var cards = this.cardsStorage.getHandCards(type);
  this.handModel.reduceCost(cards);
  return this.handModel.checkHand(card, stats);
};
