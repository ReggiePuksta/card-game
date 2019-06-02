var expect = require('chai').expect;
var should = require('chai').should();

var CardModel = require('../src/js/game/card/cardModel.js');
var cardModel = new CardModel();

describe('Card Model', function() {
  it('should return set hp', function() {
    cardModel.setHp(5);
    cardModel.hp.should.be.equal(5);
  });
  it('should return card data', function() {
    var card = cardModel.getCard();
    card.should.be.equal('object');
    // card.should.be.equal
  });
  
  
});
  describe('setHp()', function() {
    it('should update cards Model', function() {

    });
    
  });
