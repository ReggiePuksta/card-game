define(function(require) {
    function getEl(name, ele) {
        return document.getElementById(name);
    }

    function getElClass(ele, name) {
        return ele.getElementsByClassName(name);
    }
    var Template = require('template');
    var CardView = function() {
        this.element = {};
        this.effectStack = [];
    };
    CardView.prototype.place = function(pos) {
        Animation.place(this, pos);
    };
    CardView.prototype.addEffect = function(effect, options) {
        this.effectStack.push([effect, options]);
        Animation.initEffect(effect, options);
    };
    CardView.prototype.updateStats = function(stats) {
        if (stats) {
            Template.update(stats);
        }
    };
    CardView.prototype.getEleClass = function(ele, name) {
        return ele.getElementsByClassName(name)[0];
    };
    CardView.prototype.reduceHp = function(hp) {
        var elementHp = this.getEleClass(this.element, 'hp');
        elementHp.backgroundColor(red);
        elementHp.innerHTML = hp;
        // this.element.hp(hp);
        // Animate.card.reduceHp(hp);
    };
    CardView.prototype.increaseHp = function(hp) {
        Animate.increaseHp(hp);
    };
    CardView.prototype.render = function(model) {
        Template.render('card', model);
    };
});
