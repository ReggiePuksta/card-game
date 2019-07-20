var animation = require('../../animation.js');
var template = require('../../template-storage.js');
var helper = require('../../utils.js');
var StatsView = function(container) {
    this.$container = helper.qs(container);
    this.animate = true;
}
HeroView.prototype.render = function(data) {
  template.render('stats', this.$container, data);
  this.$strength = helper.qs(this.$container, '.strength');
  this.$inteligence = helper.qs(this.$container, '.inteligence');
  this.$fortune = helper.qs(this.$container, '.fortune');
};
HeroView.prototype.modelChanges= function() {
  Notification.on(this.name + 'HeroStr', this.updateHp);
  Notification.on(this.name + 'HeroInt', this.updateHp);
  Notification.on(this.name + 'HeroFortune', this.updateHp);
};
HeroView.prototype.update = function(prop, data) {
  this[prop].textContent = data.value;
  if (data.change) {
     animation.use('increase', this[prop]); 
  } else {
      animation.use('decrease', this[prop]);
  }
}
HeroView.prototype.updateStrength= function(data) {
    this.update('$strength', data);

};
HeroView.prototype.updateInteligence = function(data) {
    this.update('$inteligence', data);
};
HeroView.prototype.updateFortune = function(data) {
    this.update('$fortune', data);
};