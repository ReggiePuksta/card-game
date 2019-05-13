define(function(require) {
    var BoardController = function(BoardModel, BoardView) {
        this.boardModel = new BoardModel();
        this.boardView = new BoardView();
        this.availableSlots = [];
        this.activeCard = 0;
    };

    BoardController.prototype.init = function() {
        this.boardModel.create();
        this.boardView.displayBoard();
    };
    BoardController.prototype.events = function() {
        this.boardView.hand.on("click",
            this.handHandler.bind(this));
        this.boardView.hand.on("hover",
            this.hoverHandHandler.bind(this));
        this.boardView.boardSlot.on("click",
            this.boardSlotHandler.bind(this));
        this.boardView.boardSlot.on("hover",
            this.hoverBoardSlotHandler.bind(this));
        this.boardView.hero.on("click",
            this.heroHandler.bind(this));
    };
    BoardController.prototype.handHandler = function(e) {
        var card = e.target;
        var $card = $(card);
        var cardId = card.data.id;
        this.activeCard = card;
        // TODO Create double click to deselect and reset
        // this.availableSlots and this.activeCard
        this.availableSlots = this.boardModel.calculateAvailableSlots(cardId);
        this.boardView.showAvailableSlots(this.availableSlots);
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
        // TODO
        for (var i = 0, p = this.availableSlots.length; i < p; i++) {
            if (this.availableSlots[i] === position) {
                // socket.emmit("activateCard", {
                //     cardId: this.activeCard,
                //     pos: position
                // });
                // socket.on("responseActive", function() {

                // });
                // Remove the card from the Hand array
                this.boardModel.activateCard(this.activeCard);
                // Remove the card from the Hand view
                this.boardView.activateCard(this.activeCard);
                Animate.placement(this.activeCard, slot);
            }
        }
    };
    BoardController.prototype.activateTargetingMode = function(e) {};
    var BoardView = function(model) {
        this.model = model;
        // this.hand = new Hand();
        // this.hero = new Hero();
        this.components = {};
    };


});
