var expect = require('chai').expect;
var should = require('chai').should();

var CardModel = require('../js/cardModel.js');
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
describe('Card Controller: ', function() {
  describe('setHp()', function() {
    it('should update cards Model', function() {

    });
    
  });
  
  // Have to implement before
  var CardController = require('../js/cardController.js');
  var cardController = new CardController(cardModel, cardView);
  it('should return set hp', function() {
    cardController.setHp(5);
    cardController.hp.should.be.equal(5);
  });
  it('should return card data', function() {
    var card = cardController.getCard();
    card.should.be.equal('object');
  });
  
  
});

describe('Test behavior of adding Two numbers', function() {
  it('should return 2 when given 1 and 1', function() {
    expect(addTwo(1,1)).to.equal(2);
  });
  it('should not return 3 when given 1 and 1', function() {
    addTwo(1,1).should.not.be.equal(3);
  });
});
