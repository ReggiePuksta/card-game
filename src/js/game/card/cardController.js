define(function(require) {
    var CardController = function(cardModel, cardView) {
        this.cardModel = cardModel;
        this.cardView = cardView;
    };
    CardController.prototype.createCard = function() {
        this.cardView.buildStats(cardModel.getStats());
    };
    CardController.prototype.bindModelData = function() {
      
    };
    CardController.prototype.modelEvents = function() {
      var that = this;
      Notifier.on('reduceHp', function(data) {
        that.cardView.reduceHp(data); 
      });
      Notifier.on('increaseHp', function(data) {
        that.cardView.increaseHp(data); 
      });
    };
    CardController.prototype.attachClientEvents = function() {
    };
    return CardController;
});
