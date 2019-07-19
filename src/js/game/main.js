/* Game initialisation procedure */
/* Before the game starts we have:
    + Basic MVC description classes: Model, View, Ctrl
    (Maybe some form of MVC module loader)
    + TemplateStorage
    + UserData
    + GameData:
      - Cards in the deck (We don't know the order, just list),
      - Cards in the hand.
      - We don't know enemy's hand only number of cards (No order)
      - We don't know enmey's cards in the deck.
      - Player Hero
      - Enemy Hero
      - Board, Graveyard, Ongoing should be empty.
  Every time the battle starts we:
  1) Decide who starts first -> Show animation
  2) Activate socket connection:
    + Enemy turn - Enable receiving and block sending data.
    + Player turn - Disable receiving data enable sending data.
  )
  3) Gather All required data for each individual model and
    instantiate before we start showing any views:
    + Card data. We loop through all cards data available for
     the view and with CardFactory we create a Card objects that
     we store inside CardsStorage with id and their locations:
      - cards in the deck (not ordered list)
      - cards in the starting hand.
      - cards on the board: monster, trap, ongoing (situational)
      - cards in the graveyard (situational)
    + Board
    + PlayerHero and EnemyHero
    + PlayerHand and EnemyHand
  4) Instantiate all views. 
  5) Instantiate all controllers - connect models and views.
  6) Show all views in order:
    + GameView - Background, UserView.
    + Board
    + Player and enemy heroes -> show animation appearing
    + Player and enemy Hand -> show animation dealing
*/
var GameModel = require('./game-model.js');
var GameView = require('./game-view.js');
// var mvcLoader = require('./mvc-loader.js');
// mvcLoader.load(hero);
// mvcLoader.load(board);
var hero = require('./hero/index.js');
var board = require('./board/index.js');
var hand = require('./hand/index.js');
var cardsStorage = require('./card/cards-storage.js');
var templateStorage = require('../template-storage.js');

hero.enemyHero(data.enemyHero);
hero.playerHero(data.playerHero);

// Data.init = function() {
//   GameModel.add('enemyHero', new hero(data.enemyHero));
//   GameModel.add('playerHero', new hero(data.playerHero));
//   hero(data.playerHero);
// };