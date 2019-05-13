define(function(require) {
    /**
     * Data Class used to communicate with the server and gather
     * response data for Models.
     *
     */
    var Data = function() {
        this.socket = socket;
        this.allState = {};
        this.boardState = {};
        this.heroState = {};
        this.handState = {};
    };
    Data.prototype.init = function() {
        this.socket = socket('http://localhost:3004');
        this.socket.on('connect', function() {
            this.getBoardState();
        });
    };
    Data.prototype.receiveActionData = function(callback) {
        this.socket.on('action', function(data) {
            callback(data);
        });
    };
    Data.prototype.getAllState = function() {
        this.socket.emit('getAllState', function(data) {
            this.allState = data;
        });
    };
    Data.prototype.getBoardState = function() {
        this.socket.emit('getBoardState', function(data) {
            this.boardState = data;
        });
    };
    Data.prototype.getCardList = function() {
        this.socket.emit('getCardList', function(data) {
            this.cardList = data;
        });
    };
    Data.prototype.getHeroState = function() {
        this.socket.emit('getCardList', function(data) {
            this.heroState = data;
        });
    };
    Data.prototype.getCard = function() {
        this.socket.emit('getCard', function(data) {
            this.cardList = data;
        });
    };
    Data.prototype.sendAction = function(data) {
        this.socket.emit('cardAction', data);
    };
    Data.prototype.getCardById = function(id, callback) {
        if (this.cached && this.cached.cards) {
            callback(this.chached.cards[id]);
        } else {
            this.socket.emit('card.findById', id, function(card) {
                callback(card);
            });
        }
    };
  return Data;
});
