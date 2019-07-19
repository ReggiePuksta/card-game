var GameModel = function() {
  this.hero = {};
  this.enemyHero = {};
  this.board = {};
  this.hand = {};
  this.enemyHand = {};
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

module.exports = GameModel;