var Animation = function(type) {
    this.type = type;
};
Animation.prototype.animate = function(type) {
    switch (type) {
        case 'damage':
            this.damage(positions);
            break;
        case 'heal':
            this.heal(positions);
            break;
        case 'poision':
            this.poison(positions);
            break;
        case 'shockWave':
            this.shockWave(range, direction, position);
            break;
        default:
            console.log("Animation: Not Found");
    }
};
Animation.prototype.damage = function(positions) {
    this.blink('red');
    // Change Text color to red
    this.text.class = 'red';
};
var AnimationStorage = {
    damage: function() {
        
    },
    heal: function() {

    }
}
