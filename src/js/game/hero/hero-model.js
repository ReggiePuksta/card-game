var HeroModel = function(data) {
  this.name = data.name + 'HeroModel';
  this.str = data.str;
  this.int = data.int;
  this.fortune = data.fortune;
  this.hp = data.hp;
};
HeroModel.prototype.updateAll = function(data) {
  this.name = data.name + 'HeroModel';
  this.stats = data.stats;
  this.hp = data.hp;
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
HeroModel.prototype.update = function(stat, value) {
  this[stat] += value;
  Notifier.emit(this.name + 'Hero.' + stat, {
    value: this[stat],
    increase: (value > 0)
  });
}
HeroModel.prototype.updateHp = function(value, change) {
  this.update('hp', value, change);
  if (this.hp < 1) {
    Notifier.emit(this.name + '.gameEnd', 2);
  }
};
HeroModel.prototype.updateStr = function(value, change) {
  this.update('str', value, change);
};
HeroModel.prototype.updateInt = function(value, change) {
  this.update('int', value, change);
};
HeroModel.prototype.updateFortune = function(value, change) {
  this.update('fortune', value, change);
};