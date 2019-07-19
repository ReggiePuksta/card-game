// We need to get Animations object instance
var Animation = require('../../animation.js');
// We need to get Template storage instance
var TemplateStorage = require('../../template-storage.js');
var HeroView = function(container) {
  this.$container = container;
  this.$hp = qs(this.$container, '.hp');
  this.animate = true;
};
HeroView.prototype.render = function(data) {
  Template.render('Hero', data);
};
HeroView.prototype.showOptions = function(data) {
  Template.render('OptionsMenu', data, data.optionsNum);
};
HeroView.prototype.update= function(data) {
 switch (data.type) {
   case 'hp':
    if (data.increment) {
      this.increaseHP(data.amount);
    } else {
      this.reduceHP(data.amount);
    } 
     break;
   
   default:
     
 } 
};
HeroView.prototype.reduceHP = function(hp) {
  // We can choose if we want to animate or just update the data
  if (this.animate) {
    Animation.reduce(this.$hp, hp);
  } else {
    this.$hp.textContent = hp;
  }
};
HeroView.prototype.increaseHP = function(hp) {
  if (this.animate) {
    Animation.increase(this.$hp, hp);
  } else {
    this.$hp.textContent = hp;
  }
};
