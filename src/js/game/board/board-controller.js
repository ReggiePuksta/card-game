var BoardController = function(boardModel, boardView) {
    this.model = boardModel;
    this.view = boardView;
    this.availableSlots = [];
    this.activeCard = 0;
};

BoardController.prototype.init = function() {
    this.model.create();
    this.view.displayBoard();
};
BoardController.prototype.events = function() {
    this.view.boardSlot.on("click",
        this.boardSlotHandler.bind(this));
    this.view.boardSlot.on("hover",
        this.hoverBoardSlotHandler.bind(this));
};
BoardController.prototype.handHandler = function(e) {
    // TODO has to be moved to the view
    var card = e.target;
    var $card = $(card);
    var cardId = card.data.id;
    this.activeCard = card;
    // TODO Create double click to deselect and reset
    // this.availableSlots and this.activeCard
    this.availableSlots = this.model.calculateAvailableSlots(cardId);
    this.view.showAvailableSlots(this.availableSlots);
};
BoardController.prototype.boardSlotHandler = function(e) {
    var slot = e.target;
    var position = slot.data.pos;
    if (!this.availableSlots.length) {
        console.log("No available Slots");
        return;
    }
    if (!this.activeCard) {
        console.log("No active Card is Available"); return;
    }
    // Validate if Slot is highlighted and available
    // TODO put this into separate object
    for (var i = 0, p = this.availableSlots.length; i < p; i++) {
        if (this.availableSlots[i] === position) {
            // socket.emmit("activateCard", {
            //     cardId: this.activeCard,
            //     pos: position
            // });
            // socket.on("responseActive", function() {

            // });
            // Remove the card from the Hand array
            this.model.activateCard(this.activeCard);
            // Remove the card from the Hand view
            this.view.activateCard(this.activeCard);
            Animate.placement(this.activeCard, slot);
        }
    }
};
BoardController.prototype.activateTargetingMode = function(e) {

};
var BoardView = function(model) {
    this.model = model;
    // this.hand = new Hand();
    // this.hero = new Hero();
    this.components = {};
};
module.exports = BoardController;
