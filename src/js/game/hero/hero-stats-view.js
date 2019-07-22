var animation = require('../../animation.js');
var template = require('../../template-storage.js');
var Notifier = require('../../notifier.js');
var helper = require('../../utils.js');
var StatsView = function(container) {
    this.$container = helper.qs(container);
    this.animate = true;
};
StatsView.prototype.render = function(data) {
  var binds = template.render('stats', this.$container, data);
  this.$strength = helper.qs(this.$container, '.strength');
  this.$inteligence = helper.qs(this.$container, '.inteligence');
  this.$fortune = helper.qs(this.$container, '.fortune');
};
StatsView.prototype.modelChanges= function() {
  Notification.on(this.name + 'HeroStrenght', this.updateStrength);
  Notification.on(this.name + 'HeroInteligence', this.updateInteligence);
  Notification.on(this.name + 'HeroFortune', this.updateFortune);
};
StatsView.prototype.update = function(prop, data) {
//   this[prop].textContent = data.value;
  if (data.increase) {
    animation.use('increase', this[prop], data.value); 
  } else {
    animation.use('decrease', this[prop], data.value);
  }
};
StatsView.prototype.updateStrength = function(data) {
    this.update('$strength', data);
};
StatsView.prototype.updateInteligence = function(data) {
    this.update('$inteligence', data);
};
StatsView.prototype.updateFortune = function(data) {
    this.update('$fortune', data);
};
