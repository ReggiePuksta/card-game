var Animation = function(type) {
    this.collection = {};
};
Animation.prototype.use= function(type, container, value) {
    this.collection[type](container, value)

};
Animation.prototype.damage = function(positions) {
    this.blink('red');
    // Change Text color to red
    this.text.class = 'red';
};
var AnimationStorage = {
    increase: function(container, value) {
        container.classname += 'animation-increase-value';
        container.textContet = value;
    },
    decrease: function(container, value) {

        container.textContet = value;
    },
    damage: function() {
        
    },
    heal: function() {

    }
}
