var Controller = require('../../core/controller.js');

HeroController = function(service, view) {
  Controller.call(this, service, view);
};
HeroController.prototype = Object.create(Controller.prototype);
HeroController.prototype.constructor = HeroController;

HeroController.prototype.boundEvents= function(events) {
  // TODO this will have to be redone
  this.events = {
    'click.hp': function(e) {

    },
    'click.image': function(e) {

    },
    'hover': function(e) {

    },
    'click': function(e) {
      // We need to know application states
      if (model.payerTurn && model.heroNotActivated) {
        // We can activate pop menu to increase stats or choose
        // ability.This will work only if the instantiated object is
        // a player 
      }
    }
  }
 return events;
};

HeroController.prototype.clickHandler = function(e) {
  // We need to check if the card is clicked not in the hero model,
  // but in the board Model. Therefore to use this controller
  // we will need both hero and board models.
  // We can abstract both models with a service layer.
  if (this.service.playerTurn()) {
    this.service.doDamage(hp);
  } else {
    this.view.showOptions();
  }
};
HeroController.prototype.hoverHandler = function() {};

//TODO needs to be modified
// EnemyHeroController.prototype.clickHandler = function(e) {
//   // We need to check if the card is clicked not in the hero model,
//   // but in the board Model. Therefore to use this controller
//   // we will need both hero and board models.
//   // We can abstract both models with a service layer.
//   if (this.service.playerTurn()) {
//     this.service.doDamage(function(hp) {
//       this.view.reduceHp(hp);
//     });
//   } else {
//     this.view.showOptions();
//   }
// };
module.exports = HeroController;