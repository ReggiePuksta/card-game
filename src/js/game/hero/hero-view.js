// We need to get Animations object instance
var animation = require('../../animation.js');
var template = require('../../template-storage.js');
var helper = require('../../utils.js');
var HeroView = function(viewName , container) {
  this.viewName = viewName;
  // We need to check for ID
  this.$container = document.getElementById(container + '-hero');
  this.animate = true;
};
HeroView.prototype.render = function(data) {
  // Instead of binding individual elements in the view
  // template.render returne's automatically named elements.
  // The values are taken from the html template data attribute.
  this.targets = template.render('hero', this.$container, data);
};
HeroView.prototype.modelChanges= function() {
  Notification.on(this.name + 'HeroHp', this.updateHp);
};
HeroView.prototype.update = function(prop, data) {
  // this[prop].textContent = data.value;
  if (data.increase) {
     animation.use('increase', this.targets[prop], data.value);
  } else {
     animation.use('decrease', this.targets[prop], data,value);
  }
};
HeroView.prototype.updateHp= function(data) {
    this.update('hp', data);
};
HeroView.prototype.showOptions = function(data) {
  template.render('optionsMenu', this.$container, data);
};
