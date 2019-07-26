var Notifier = require('../../notifier');
var HeroModel = function(modelName, data) {
  this.modelName = modelName + "Hero";
  this.name = data.name;
  this.strength = data.strength;
  this.intelligence = data.intelligence;
  this.fortune = data.fortune;
  this.hp = data.hp;
};
var upperCaseFirst = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
HeroModel.prototype.updateMulti = function(data) {
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      var value = data[key];
      this['update'+ upperCaseFirst(key)](value); 
    }
  }
};

HeroModel.prototype.getStats = function() {
  return this.stats;
};
HeroModel.prototype.setStats = function(stats) {
  this.stats = stats;
};
HeroModel.prototype.getHp = function() {
  return this.hp;
};
HeroModel.prototype.setHp = function(hp) {
  this.hp = hp;
};
HeroModel.prototype.update = function(stat, change) {
  this[stat] += change;
  Notifier.emit(this.modelName + '.' + stat, {
    value: this[stat],
    increase: (change > 0)
  });
}
HeroModel.prototype.updateHp = function(change) {
  this.update('hp', change);
  if (this.hp < 1) {
    Notifier.emit('gameEnd', 2);
  }
};
HeroModel.prototype.updateStrength = function(change) {
  this.update('strength', change);
};
HeroModel.prototype.updateIntelligence = function(change) {
  this.update('intelligence', change);
};
HeroModel.prototype.updateFortune = function(change) {
  this.update('fortune', change);
};

module.exports = HeroModel;