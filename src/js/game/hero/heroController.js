var Controller = require('../../core/Controller.js');

HeroController = function(service, view) {
  Controller.call(this, service, view);
};
HeroController.prototype = Object.create(Controller.prototype);
HeroController.prototype.constructor = HeroController;

HeroController.prototype.ModelEvents = function(e) {
  Notifier.on('HeroChange', function(data) {
    this.view.update(data);
  });
};
HeroController.prototype.clickHandler = function(e) {
  // We need to check if the card is clicked not in the hero model,
  // but in the board Model. Therefore to use this controller
  // we will need both hero and board models.
  // We can abstract both models with a service layer.
  if (this.service.playerTurn()) {
    this.service.doDamage(function(hp) {
      this.view.reduceHp(hp);
    });
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
