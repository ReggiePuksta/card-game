var GameModel = function() {
  this.hero = {};
  this.enemyHero = {};
  this.board = {};
  this.hand = {};
  this.enemyHand = {};
  this.stats = {};
  this.enemyStats = {};
};
GameModel.prototype.setAllModels= function(models) {
  this.hero = models.hero;
  this.enemyHero = models.enemyHero;
  this.board = models.board;
  this.hand = models.hand;
  this.enemyHand = models.enemyHand;
  this.stats = models.hero.stats;
  this.enemyStats = models.enemyHero.stats;
};
GameModel.prototype.doHeroDmg = function(change) {
  this.hero.hp += change;
};
GameModel.prototype.doEnemyHeroDmg= function(change) {
  this.enemyHero.hp += change;
};
GameModel.prototype. = function(change) {
  this.hero.hp += change;
};
GameModel.prototype.doHeroDmg = function(change) {
  this.hero.hp += change;
};
GameModel.prototype.doHeroDmg = function(change) {
  this.hero.hp += change;
};

