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
var hero = require('./hero/index.js');
//var board = require('./board/index.js');
//var hand = require('./hand/index.js');

// We can register modules here or inside index files modules
// can register themselves.

// mvcLoader.load(hero);
// mvcLoader.load(board);

// Example of Incomming Data from websockets
var initData = {
  starting: 0,
  enemyHero: {
    name: 'Gio',
    strength: 2,
    intelligence: 0,
    fortune: 1,
    stats: [2, 0, 1],
    hp: 20,
    activation: {
      name: 'Stack defence',
      explanation: 'Gives 1 retribution to friendly creature and all ' +
        'adjacent creatures',
      cost: 3,
      targeting: {
        board: ['player', 'creature']
      },
      //   effect: {
      //     'target': {
      //       board: ['player', 'creature', 'stats', [0, 1, 0]],
      //       'boardArea': ['adjacent','all','player','creature', 'stats', [0, 1, 0]]
      //     },
      //     function() {
      //       var target = this.targeting('board', 'player', 'creature');
      //       var adjacent = this.board.findAdjacent(target);
      //       var targetCreature = target.getCreatureCard();
      //       targetCreature.changeStats([0, 1, 0]);
      //       adjacent.forEach(function(el) {
      //         el.increaseStats([0, 1, 0]);
      //       });
      //     }
    }
  },
  playerHero: {
    name: 'Chronos',
    strength: 1,
    intelligence: 2,
    fortune: 0,
    stats: [1, 2, 0],
    hp: 20,
  }
};
WebSocket.on('load', function(data) {
  GameModel.update(data)
});

/* We need to sort out how to import and use MVC modules*/

/* Options 1) More importance on Models
This is where we are centralised around GameModel which we use
for updating individual models. Then those models Notify
respected views to render. We could also have centralised
GameView that coult act as Notifier catcher and update
it's children views individually. The problem is that then
Controllers have not much to do. */

/* Option 2) More importance on Controllers 
This is where we centralise around GameController.
We create our MVC parts as modules. Each module
has MVC triad where Controller acts as a mediator. The problem
then that Models become less relevant. */

var GameControler = function(list) {
  this.modules = list;
};
GameControler.prototype.add =function(module) {
  this.modules[module.name] = module;
};
GameControler.prototype.update = function(data) {
  this.modules[data.moduleName].update(data);
};
GameControler.prototype.add =function(module) {
  this.modules[module.name] = module;
};
GameControler.prototype.add =function(module) {
  this.modules[module.name] = module;
};

hand.enemy.initRender(initData.enemyHand);
hand.player.initRender(initData.playerHand);
hero.enemy.initRender(initData.enemyHero);
hero.player.initRender(initData.playerHero);
board.initRender(initData.board);
user.player.initRender(initData.user)
user.enemy.initRender(initData.user)
gameView.renderAll();
new TargettingMode()

// Data.init = function() {
//   GameModel.add('enemyHero', new hero(data.enemyHero));
//   GameModel.add('playerHero', new hero(data.playerHero));
//   hero(data.playerHero);
// };