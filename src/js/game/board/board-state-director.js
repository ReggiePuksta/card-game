var Bsd, BoardStateDirector;

Bsd = BoardStateDirector = function() {
    this.data = {
        userId: 234,
        battleId: 23,
        battleToken: "5asdgqwe213214WER",
        playerId: 1,
        userHand: [12, 3, 44, 106, 106],
        player1State: [0, {
                id: 23,
                cardId: 121,
                realStats: [1, 2, 5],
                effectStats: [1, 2, 3]
            }, 0, 0, 0, 0, {
                id: 4,
                cardId: 104,
                realStats: [3, 0, 2],
                effectStats: [1, 0, 2],
            },
            0
        ],
        player2State: [0, 0, 0, 0, 0, 0, 0, 0],
        rowTraps: [0, 0, 0, 0],
        lineTraps: [0, 0, 0, 0]
    };
    this.boardState = this.data.player1State;
};

Bsd.prototype.get = function() {
    return this.boardState;
};
Bsd.prototype.findCardById = function(id) {
    this.boardState.forEach(function(i) {
        // if ();
    });
};
Bsd.prototype.findCardsByPosition = function(pos) {
    this.boardState.forEach(function(i) {
        // if ();
    });
};
Bsd.prototype.reduceCreatureHP = function(pos) {
    this.findCardsByPosition();
};
Bsd.prototype.calculateAttack = function(attacker, deffender) {
    var hp,
        attackDmg = attacker[0],
        retaliation = deffender[1],
        hpAttacker = attacker[2],
        hpDeffender = deffender[2];
    var hpAttackerAfter = hpAttacker - retaliation;
    var hpDeffenderAfter = hpDeffender - attackDmg;
    attacker[2] = hpAttackerAfter;
    deffender[2] = hpDeffenderAfter;
    hp = new Array(attacker, deffender);
    return hp;
};
Bsd.prototype.changeCardStats = function(pos, mask) {
    // mask = [-1,-1,0]
    // pos = 5
    var cardStats = this.findCardsByPosition(pos);
    // cardStats === [2,3,5,2,3,5];
    for (var i = 0; i < 3; i++) {
        cardStats[i] += mask[i];
    }
};

var bsd = new BoardStateDirector();
console.log(bsd.findCardById());

var l = bsd.calculateAttack([4, 2, 5, 4, 2, 5], [1, 3, 7, 1, 3, 7]);
console.log(l);
