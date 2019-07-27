var HeroModel = require('./hero-model.js');
var HeroView = require('./hero-view.js');
var HeroStatsView = require('./hero-stats-view.js');
var HeroController = require('./hero-controller.js');
var GameModel = require('../game-model.js');
var GameView = require('../game-view.js');
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
  
var Controller = function(name) {
  this.name = name;
  this.model = {}
  this.view = {};
};
Controller.prototype.init = function(data) {
  this.view = new HeroView(this.name, this.name);
  this.statsView = new HeroStatsView(this.name, this.name);
  this.model = new HeroModel(this.name, data);
  //   GameModel.add(name, heroModel);
  //   GameView.add(name, heroView);
};
var HeroController = function(name, events) {
  this.name = name;
  this.events = events;
  this.model = {};
  // this.view = {};
}
HeroController.prototype.init = function(data) {
  this.view = new HeroView(this.name, this.name);
  this.statsView = new HeroStatsView(this.name, this.name);
  this.model = new HeroModel(this.name, data);
  //   GameModel.add(name, heroModel);
  //   GameView.add(name, heroView);
};
HeroController.prototype.initRender = function(data) {
  this.init(data);
  this.render();
}
HeroController.prototype.update = function(data) {
  this.model.update(data);
};
HeroController.prototype.render = function() {
  this.view.render(this.model);
  this.statsView.render(this.model);
};
var enemyHeroEvents = {
  'click': function(e){
    return;
  },
  'hover': function(e) {
    this.view.showInfo();
  }
};
var playerHeroEvents = function(viewData) {};
module.exports = {
  player: new HeroController('player', playerHeroEvents),
  enemy: new HeroController('enemy', enemyHeroEvents)
  // playerStats: new StatsFactory('player', playerHero);
  // enemyStats:
};