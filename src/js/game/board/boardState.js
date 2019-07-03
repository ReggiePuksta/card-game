var BoardState = function() {
    this.board = {};
};
Types = {
    dmg: function() {}
};
Actions = {
    'spell': function(data) {
        this.activateSpell(data);
    },
    'trap': function(data) {
        this.activateTrap(data);
    },
    'building': function(data) {
        this.activateBuilding(data);
    },
    'creature': function(data) {
        this.activateCreature(data);
    }
};
BoardState.prototype.receiveAction = function(enemyData, cb) {
    var data = this.enemyDataAdapter(enemyData);
    this.action(data.action, data.details);
};
BoardState.prototype.activateSpell = function(card) {
    if (card.repeating) {
        // We hook the card in to the loop
    }
    if (card.init) {
        Types[card.init.type].call(this, card.init.amount);
    }
};
BoardState.prototype.target = function(targetArray) {
    var reduction;
    var targets = {
        'melee': [4, 5, 6, 7, 8, 9, 10, 11],
        'ranged': [0, 1, 2, 3, 12, 13, 14, 15],
        'enemy': [8, 9, 10, 11, 12, 13, 14, 15],
        'friendly': [0, 1, 2, 3, 4, 5, 6, 7, 8],
        'trapsLane' : [16, 17, 18 ,19],
        'lane1': [0, 4, 8, 12],
        'lane2': [1, 5, 9, 13],
        'lane3': [2, 6, 10, 14],
        'lane4': [3, 7, 11, 15],
    };

    function matchArrays(arr1, arr2) {
        return arr1.filter(function(a) {
            arr2.forEach(function(b) {
                if (a === b) {
                    return true;
                }
            });
        });
    }
    if (targetArray[0] === 'creature') {
        reduction = this.board.main.filter(function(a) {
            if (a && a.creature) {
                return a;
            }
        });
        return this.targetNext(reduction);
    }
    if (targetArray[0] === 'trap') {
        reduction = this.board.traps.filter(function(a) {
            if (a && a !== 0) {
                return a;
            }
        });
        return this.targetNext(reduction);
    }
    if (targetArray[0] === 'hero') {
        return 'hero';
    }
    if (targetArray[0] === 'ongoing') {}
    if (targetArray[0] === 'type') {}
    if (targetArray[0] === 'targeting') {
        return this.activateTargetingMode;
    }
    if (targetArray[2] === 'all') {
        reduction = this.findFriends(reduction);
    }
    if (targetArray[2] === 'lane') {
        reduction = this.findFriends(reduction);
    }
    if (targetArray[2] === 'melee') {
        reduction = this.findFriends(reduction);
    }
    if (targetArray[2] === 'ranged') {
        reduction = this.findFriends(reduction);
    }
};
BoardState.prototype.targetNext = function(cardsArray) {
    var reduction
    if (targetArray[1] === 'enemy') {
        reduction = cardsArray.filter
    }
    if (targetArray[1] === 'friend') {
        reduction = this.findFriends(reduction);
    }

};


BoardState.prototype.action = function(action, data) {
    return Actions[action].call(this, action, data);
};
BoardState.prototype.activateTrap = function(data) {
    return Actions[action].call(this, action, data);
};
BoardState.prototype.activateCreature = function(data) {
    this.placeCard(data.card, data.pos);
    if (data.card.init || data.card.repeating) {
        this.activateSpell(data.card);
    }
};

BoardState.prototype.placeCard = function(card, pos) {
    // var available = this.validate(card, pos);
    // if (available) {

    // }
    this.board[pos] = card;
    if (card.init) {
        /* Target friendly creature and heal it
         */
    }
};
BoardState.prototype.dmg = function(action) {
    Notifier('dmg', [{
        pos: 9,
        hp: 1
    }, {
        pos: 11,
        hp: 2
    }, {
        pos: 12,
        hp: 1
    }]);
};
