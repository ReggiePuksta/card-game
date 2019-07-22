var HeroModel = require('./hero-model.js');
var HeroView = require('./hero-view.js');
var HeroStatsView = require('./hero-stats-view.js');
var HeroController = require('./hero-controller.js');
var Animation = require('../../animation.js');
var GameModel = require('../game-model.js');
var GameView = require('../game-game-view.js');
/*
    We will need to create 2 hero objects: Player and Enemy.
    2 model and 2 view objects gonna be exacltly the same,
    just their values are gonna be different.
    2 Controllers will need to have different onClick events.
    We can click on our player hero to activate his abilities, but
    we can't click on enemy hero. We can only click on enemy hero
    as a target object during the targeting mode. Hover effects work the
    same way in both hero objects.
*/
/*
    We can only instanciate HeroModel and HeroView when we get Hero Data.
    And then we attach the controller.
    When we are initializing EnemyHero Model and PlayerHeroModel we only need
    the data. We need different click functions for each Hero. We shouldn't include
    those functions while we are initializing. Same with View dependencies: 
    Template storage and Animations storage. 
    */

var Herofactory = function(name, events) {
  this.name = name;
  this.events = events;
  this.model = {};
}
Herofactory.prototype.init = function(data) {
  this.model = new HeroModel(this.name, data);
  var heroView = new HeroView(this.name, this.name);
  var heroStatsView = new HeroStatsView(this.name, this.name);
  //   GameModel.add(name, heroModel);
  //   GameView.add(name, heroView);
  var heroController = new HeroConctroller(this.name,
    heroModel, heroView);
  heroController.clickEvent(this.events);
};
Herofactory.prototype.update = function(data) {
  this.model.update(data);
};
var enemyHeroEvents = function(viewData) {};
var playerHeroEvents = function(viewData) {};
module.exports = {
  player: new Herofactory('player', playerHeroEvents),
  enemy: new HeroFactory('enemy', enemyHeroEvents)
};