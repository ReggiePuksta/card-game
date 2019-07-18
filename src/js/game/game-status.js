var GameStatus = function() {
  // this.turn = 0;
  // this.noWinner = true;
  this.playerTurn = false;
};
GameStatus.prototype.start = function() {
  Notifier.on('EndGame', function(data) {
    this.endGame(data);
  });
  Notifier.on('EndTurn', function(data) {
    this.endTurn(data);
  });
  if (this.playerTurn) {
    this.activatePlayerTurn();
  } else {
    this.activateEnemyTurn();
  }
};
GameStatus.prototype.endGame = function() {
  // We need to close Game Website Route
  console.log("Game ENDED!!");
};
GameStatus.prototype.activatePlayerTurn = function() {
  this.playerTurn = !this.playerTurn;
  /* Enable player click controlls */
  Notifier.emit('playerControls', true);
  /* Disable any changes to the models from
  the socket.io object */
};
GameStatus.prototype.activateEnemyTurn = function() {
  this.playerTurn = !this.playerTurn;
  /* Passive/ Listening mode */
  /* Enable changes to the game models by socket.io */
  Notifier.emit('playerControls', false);
};
GameStatus.prototype.endTurn = function(data) {
  this.playerTurn ?
    this.activateEnemyTurn() : this.activatePlayerTurn() ;
}

module.exports = GameStatus;
// var GameController = function() {
//   this.gameModel = model;
//   this.heroController = hero;
//   this.baordController = board;
//   this.handController = hand;
//   this.notifier = notifier;
// };

// GameController.prototype.enablePlayerEvents = function() {
//   this.heroController.enable();
//   this.boardController.enable();
//   this.handController.enable();
// };
// /**
//  * When player events are disabled, we can only issue click, hover
//  * commands for card/hero/board preview.
//  */
// GameController.prototype.disablePlayerEvents = function() {
//   this.heroController.disable();
//   this.boardController.disable();
//   this.handController.disable();
// };