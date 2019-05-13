define(function(require) {
    var Notifier = require("notifier");
    /*
     * TODO Do we need User Model here?
     * BoardModel
     * -boardState [Object]
     * -cardsInHand [array]
     * -numberOfCardsOpponent [integer]
     *  ------------------------
     *  +getBoardState()
     *  +getCardsInHand()
     *  +getNumberOfCardsOpponent()
     *  +setUpBoard()
     *
     */
    var BoardModel = function(data) {
        this.data = repository;
        this.boardState = boardState;
    };
    BoardModel.prototype.init = function() {
        Data.setBoard(function(boardState) {
            this.boardState.init(boardState);
            Notifier.emit('board.init', boardState);
        });
    };
    BoardModel.prototype.activateServerEvents = function(pos) {
        // ajax.send(this.userId, this.token, pos, function() {
        // });
        this.socket.on('cardActivation', function() {
            notifier.trigger("activation", data.boardState);
        });
    };
    // Validate if actions are possible, get Data from storage and
    // activate boardState methods and Notifies the view about changes
    // The view has animation logic and plays them when get notified.
    BoardModel.prototype.create = function(callback) {
        //Request all data required to build the boardView
        //Populate BoardModel with data
        jquery.ajax("get", "boardData", function(data) {
            this.data = data;
            Notifier.emit("initBoardData", data);
        });
    };

    BoardModel.prototype.receiveCard = function() {
        this.repo.receiveActionData(function(data) {
            this.boardState.receiveAction(data);
            Notifier.emit('actionReceived', data);
        });
    };
    BoardModel.prototype.activateCard = function(card, pos) {
        // Validate position
        BoardState.validate(card, pos);
        this.boardState.activate(card, pos, function(boardState) {

            /* Ex. init: On placement: When Anael enters the battleground or
             * attacks, heal all damage and remove all counter from another
             * target friendly creature.
             */
            if (card.init) {
                // Object of information seems to be more
                // flexible compared to storing functions and
                // initiating them here. This Object contains
                // actions. We sort out actions by parsing later.
                ActionParser.collect(card);
                //TODO might need callbacks for calculation and finding functions
                var targets = this.boardState.target(card.init.target);
            }
            if (card.repeatable) {
                // {
                //     on: 'attack',
                //     func: function() {

                //     }
                // }
                var hookableObj = ActionParser.collect(card);
                game.hook(hookableObj.on, hookableObj.func);
            }
            Notifier.emit('board.placed', boardState);
        });
    };
    var obj = {
        numberOfCards: 5,
        cardsList: [{
                id: 55,
                cardId: 6,
                name: "Destroyer",
                cost: 6,
                stats: 2,
                pos: 2,
                art: "..."
            },
            {
                id: 3,
                cardId: 40,
                name: "Ice wall",
                cost: 1,
                stats: 2,
                pos: 4,
                art: "..."
            },
            {
                id: 4,
                cardId: 18,
                name: "Change of pace",
                cost: 3,
                stats: 2,
                pos: 0,
                art: "..."
            },
            {
                id: 14,
                cardId: 23,
                name: "Sand Storm",
                cost: 3,
                stats: 4,
                pos: 4,
                art: "..."
            },
            {
                id: 9,
                cardId: 11,
                name: "Sand worm",
                cost: 2,
                stats: 3,
                pos: 3,
                art: "..."
            }
        ]
    };

    function findObjectByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return i;
            }
        }
        return null;
    }

});
