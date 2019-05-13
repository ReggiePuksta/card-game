define(function(require) {
    var Notifier = require('notifier');
    var CardModel = function() {
        this.pos = 'hand';
        this.name = '';
        this.mana = 0;
        this.cost = [];
        this.originalCost = [];
        this.stats = [];
        this.originalStats = [];
        this.hp = 0;
        this.originalHp = 0;
        this.animation = '';
        this.effectStack = [];
        this.specialAnimation = '';
    };
    CardModel.prototype.setHp = function(hp) {
        // if (this.hp && this.hp > hp) {
        //     Animate.damage(hp);
        // }
        this.originalHp = hp;
        this.hp = hp;
    };
    CardModel.prototype.reduceHp = function(dmg) {
        this.hp -= dmg;
        Notifier.emit('reduceHp', this.hp);
    };
    CardModel.prototype.setName = function(name) {
        this.name = name;
    };
    CardModel.prototype.setMana = function(mana) {
        this.setMan = mana;
    };
    CardModel.prototype.setCost = function(cost) {
        this.cost = cost;
    };
    CardModel.prototype.setStats = function(stats) {
        this.stats = stats;
    };

    return CardModel;

});
