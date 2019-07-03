var cardsStorage = require('./card/CardsStorage.js');
var Game = function() {
  this.boardModel = boardModel;
  this.handModel = handModel;
  this.heroModel = heroModel;
  this.cardsStorage = cardsStorage;
  this.turn = 0;
  this.player1Hp = 20;
  this.player2Hp = 20;
  this.startingPlayer = 1;
};
Game.prototype.start = function() {
};
Game.prototype.setPlayerHp = function(hp) {
  this.player1Hp = hp;
  if (this.player1Hp < 1) {
    Notifier.emit('gameEnd', this.player1.name);
  }
};
Game.prototype.setOpponentHp = function(hp) {
  this.player2Hp = hp;
  if (this.player1Hp < 1) {
    Notifier.emit('gameEnd', this.player1.name);
  }
};
Game.prototype.playerTurn = function() {
  /**
   * Enable player click controlls
   * Event Listeners are enabled
   */
  this.enablePlayerEvents();
};
Game.prototype.opponentTurn = function() {
  this.disablePlayerEvents();
  /**
   * Passive/ Listening mode
   * No controll available
   */
};
var GameModel = function() {
  this.board = board;
  this.playerHand = hand;
  this.playerHero = hero;
  this.oppHero = oppHero;
  // This will only show known opponent cards
  this.oppHand = oppHand;
};

var GameController = function() {
  this.gameModel = model;
  this.heroController = hero;
  this.baordController = board;
  this.handController = hand;
  this.notifier = notifier;
};

GameController.prototype.enablePlayerEvents = function() {
  this.heroController.enable();
  this.boardController.enable();
  this.handController.enable();
};
/**
 * When player events are disabled, we can only issue click, hover
 * commands for card/hero/board preview.
 */
GameController.prototype.disablePlayerEvents = function() {
  this.heroController.disable();
  this.boardController.disable();
  this.handController.disable();
};


var game = function(dataCon) {
  var gameContinue = true;
  var player1Points = dataCon.player1.startingPoints;
  var player2Points = dataCon.player2.startingPoints;
  if (opponentStarting) {
    opponentTurn();
    // listenning mode// Passive view
    // We only receive data and display visuals according to
  }
  while (gameContinue) {
    playerTurn();
    // var data = dataCon.getGameData();
    // dataCon.sendGameData('', function() {

    // });
    opponentTurn();
    // End game conditions
    if (player1Points < 1 && player2Points < 1) {
      gameContinue = false;
      Notifier.emit('endGame', winner);
    }
    if (player1Points < 1 || player2Points < 1) {
      gameContinue = false;
      Notifier.emit('endGame', winner);
    }
  }
};

// Game.prototype.init= function(first_argument) {

// };
