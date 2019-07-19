var PriceDirector = function(startingMana, startingStats) {
    // Initialise with userId
    // this.userId = userId;
    // this.connectionToken = connectionToken;
    this.mana = startingMana || 0;
    this.stats = startingStats || [0, 0, 0];
};
PriceDirector.prototype.comparePrice = function(mana, stats) {
    if (!this.compareMana(mana)) {
        return false;
    }
    if (!this.compareStats(stats)) {
        return false;
    }
    return true;
};
PriceDirector.prototype.addMana = function(mana) {
    this.mana = this.mana + mana;
};
PriceDirector.prototype.compareMana = function(mana) {
    if (this.mana < mana) {
        return false;
    }
    return true;
};
PriceDirector.prototype.payMana = function(cost) {
    if (this.mana === 0 && cost > 0) {
        return false;
    }
    this.mana = this.mana - cost;
};
PriceDirector.prototype.getMana = function() {
    return this.mana;
};
PriceDirector.prototype.addStats = function(statsArray) {
    //Type check and return some value
    for (var i = 0; i < 3; i++) {
        if (statsArray[i]) {
            this.stats[i] = this.stats[i] + statsArray[i];
        }
    }
};
PriceDirector.prototype.removeStats = function(statsArray) {
    //Type check and return some value
    for (var i = 0; i < 3; i++) {
        if (statsArray[i]) {
            this.stats[i] = this.stats[i] - statsArray[i];
        }
    }
};
PriceDirector.prototype.getStats = function() {
    return this.stats;
};
PriceDirector.prototype.compareStats = function(statsArray) {
    for (var i = 0; i < 3; i++) {
        if (statsArray[i] > this.stats[i]) {
            // Not suifcient stats provided
            return false;
        }
    }
    return true;
};


PriceDirector.prototype.get = function() {
    return {
        userId: 234,
        battleId: 23,
        battleToken: "5asdgqwe213214WER",
        playerId: 1,
        userHand: [12, 3, 44, 106, 106],
        player1State: [0, {
                id: 23,
                realStats: [1, 2, 5],
                effectStats: [1, 2, 3]
            }, 0, 0, 0, 0, {
                id: 4,
                realStats: [3, 0, 2],
                effectStats: [1, 0, 2],
            },
            0
        ],
        player2State: [0, 0, 0, 0, 0, 0, 0, 0],
        rowTraps: [0, 0, 0, 0],
        lineTraps: [0, 0, 0, 0]
    };
};

/*
 * TODO: Should be private, is it worth in JS to create
 * private methods
 */
PriceDirector.prototype.update = function(cardId, pos) {
    /*
     * userId: 234,
     * ---Token is created before each battle individual for each
     * ---player
     * connectionToken: "heqwertas12fa3",
     * ---Checks database if userId and it's token match
     * ---Check if the action is available
     * ---Store the action inside the database if yes
     * ---And send a response: yes to the client
     * Creature---
     * type: creature
     * pos: 5,
     * cardID: 32,
     * Trap----
     * type: trap
     * pos: 2,
     * cardId: 121
     */

    /*
     * userId:234,
     * connectionToken: "Heq125123",
     * action: attack,
     * cardId: 32,
     * pos: 5
     *
     * We calculate an attack on client and on the server
     */
};


var pd = new PriceDirector();

pd.addMana(2);
pd.addMana(3);
var mana = pd.getMana();
console.log(mana);
pd.addStats([0, 0, 1]);
pd.addStats([2, 2, 1]);
var stats = pd.getStats();
console.log(stats);
var check = pd.comparePrice(2, [2, 0, 2]);
console.log(check);
