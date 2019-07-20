// We need to get Animations object instance
var animation = require('../../animation.js');
var template = require('../../template-storage.js');
var helper = require('../../utils.js');
var HeroView = function(container) {
  this.$container = helper.qs(container);
  this.animate = true;
};
HeroView.prototype.render = function(data) {
  template.render('hero', this.$container, data);
  this.$hp = helper.qs(this.$container, '.hp');
};
HeroView.prototype.modelChanges= function() {
  Notification.on(this.name + 'HeroHp', this.updateHp);
};
HeroView.prototype.update = function(prop, data) {
  this[prop].textContent = data.value;
  if (data.change) {
     animation.use('increase', this[prop]); 
  } else {
     animation.use('decrease', this[prop]);
  }
}
HeroView.prototype.updateHp= function(data) {
    this.update('$strength', data);
};
HeroView.prototype.showOptions = function(data) {
  template.render('optionsMenu', this.$container, data);
};