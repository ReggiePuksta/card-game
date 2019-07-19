var HeroModel = function(data) {
  this.name = data.name + 'HeroModel';
  this.stats = data.stats;
  this.hp = data.hp;
};
HeroModel.prototype.updateAll= function(data) {
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
HeroModel.prototype.updateHp = function(change) {
  this.hp += change;
  Notifier.emit(this.name + 'Hero.hp', this.hp);
  if (this.hp === 0) {
    Notifier.emit(this.name + '.gameEnd', 2);
  }
};
HeroModel.prototype.updateStats = function(stats) {
  for (var i = 0; i < 3; i++) {
    this.stats[i] += stats[i];
  }
  Notifier.emit(this.name + '.statsUpdate', this.stats);
  return this.stats;
};
