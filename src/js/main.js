//TODO simplify Set Up Loading page
var Data = require('data');
var BoardModel = require('boardModel');
var HandModel = require('handModel');
// var HeroModel = require('heroModel');
// var GameView = require('gameView');
var BoardView = require('boardView');
var HandView = require('handView');
// var HeroView = require('heroView');
var BoardController = require('boardController');
var HandController = require('handController');
// var HeroController = require('heroController');

var data = new Data();
// Get all the game information before starting match
data.init(function(matchData) {
  // Populate game models
  var board = new BoardModel(matchData.boardState);
  var hand = new HandModel(matchData.playerCards);
  // var hero = new HeroModel(data);

  // Create Views
  // GameVew acts as a placeholder for different game elements
  // like Board and players hand
  var gameView = new GameView();
  var boardView = new BoardView();
  var handView = new HandView();

  // Controllers initialise Views with Models data
  var boardController = new BoardController(board, boardView);
  var handController = new HandController(hand, handView);
  // var heroController = new HeroController(hero, heroView);
  // var userController = new UserController(user, userView);
  // var heroView = new heroView();
  gameView.addComponent(boardView);
  gameView.addComponent(handView);
  // gameView.addComponent(heroView);
  gameView.init();
});
