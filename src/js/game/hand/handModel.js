define(function(require){
    var CardsStorage = require('CardsStorage');
    cardsStorage = new cardsStorage();
    /**
     * HandModel is a collection of card models that acts as players
     * hand
     */
    var HandModel = function(data) {
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
        cardsStorage.findByInternalId(this.cardsIds)
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
});
