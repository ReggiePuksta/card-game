var HandModel = function(cardsStorage) {
    this.data = data;
    this.cardsIds = [];
};
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

module.exports = HandModel;