
var HeroModel = require('../../src/js/game/hero/hero-model.js');
var Notifier = require('../../src/js/notifier.js');

describe('HeroModel', function() {
    var modelName = 'player';
    var data = {
        name: 'Podo',
        strength: 3,
        intelligence: 1,
        fortune: 0,
        hp: 20
    }
    var heroModel;
    beforeEach(function() {
        heroModel = new HeroModel(modelName, data);
    });

  it('should create object properties on instatiation', function() {
      expect(heroModel.name).toEqual('Podo');
      expect(heroModel.modelName).toEqual('playerHero');
      expect(heroModel.strength).toEqual(3);
      expect(heroModel.intelligence).toEqual(1);
      expect(heroModel.fortune).toEqual(0);
      expect(heroModel.hp).toEqual(20);
  });
  it('should be able to update chosen data properties', function() {
      heroModel.updateMulti({
          strength: 1,
          intelligence:-1,
          hp: -2
      });
      expect(heroModel.strength).toEqual(4);
      expect(heroModel.intelligence).toEqual(0);
      expect(heroModel.fortune).toEqual(0);
      expect(heroModel.hp).toEqual(18);

  });
  it('should be able to Notify if hp become lower than 1', function(done) {
    Notifier.on('gameEnd', function(data) {
        expect(data).toEqual(2);
        done();
    });
    heroModel.updateHp(-20);
  });

  it('should be able to Notify event on property update', function(done) {
      var i = 0;
      Notifier.on('playerHero.strength', function(data){
        expect(data.value).toEqual(4);
        i++;
        if (i === 2) {
            done();
        }
      });
      Notifier.on('playerHero.intelligence', function(data){
        expect(data.value).toEqual(0);
        i++;
        if (i === 2) {
            done();
        }
      });
      Notifier.on('playerHero.hp', function(data){
        expect(data.value).toEqual(18);
        i++;
        if (i === 2) {
            done();
        }
      });
      heroModel.updateMulti({
          strength: 1,
          intelligence:-1,
          hp: -2
      });
  });
});