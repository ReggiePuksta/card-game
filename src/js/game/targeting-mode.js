var Targeting = function(gameModel, gameView) {
  this.enabled= false;
  this.enemyHero= gameView.enemyHeroView;
  this.playerHero= gameView.playHeroView;
  this.enemyOngoing= gameView.enemyOngoingView;
  this.playerOngoing= gameView.playerOngoingView;
  this.enemyGraveyard= gameView.enemyGraveyardView;
  this.playerGraveyard= gameView.playerGraveyardView;
  this.boardModel= gameModel.boardModel;
}
  // Do we want to create viewList or we activate it straight away?
  // viewList: [
  //   ['boardView', [1, 3, 5]], 'enemyHeroView'
  // ],
  Targeting.prototype.disable= function() {
    this.enabled = false;
  },
  Targeting.prototype.enable= function() {
    this.enabled = true;
  },
  Targeting.prototype.activation= function(card) {
    this.enable();
    if (!card.activateTargeting) {
      return;
    }
    // try to compose an object using factory method??
    if (card.activateTargeting['board']) {
      card.activateTargeting['board'].forEach(function(el) {
        this.boardView.highlight(this.checkBoardPlacement(el));
      });
    }
    if (card.activateTargeting['other']) {
      card.activateTargeting['other'].forEach(function(el) {
        this[el].highlight();
      });
    }
  },
  Targeting.prototype.checkBoardPlacement= function(targetsArray) {
    var slotsData = this.getSlotsData();
    var combined = [];
    for (var i = 0; i < targetsArray.length; i++)
      var target = targetsArray[i];
    var targetRule = BoardTargetRules[target];
    if (typeof targetRule === 'function') {
      combine(combined, BoardTargetRules[target](slotsData));
    } else {
      combine(combined, BoardTargetRules[target])
    }
    return combined;
  },
  Targeting.prototype.getSlotsData= function() {
    return this.boardModel.getSlotsData();
  }
var BoardTargetRules = {
  player: [1, 2, 3, 4, 5, 6, 7, 8],
  enemy: [9, 10, 11, 12, 13, 14, 15, 16],
  all: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  range: [1, 2, 3, 4, 5, 6, 7, 8],
  melee: [1, 2, 3, 4, 5, 6, 7, 8],
  traps: [17, 18, 19, 20, 21, 22, 23, 24],
  laneTraps: [1, 2, 3, 4, 5, 6, 7, 8],
  rowTraps: [1, 2, 3, 4, 5, 6, 7, 8],
  lanes: {
    lane1: [1, 5, 9, 13],
    lane2: [2, 6, 10, 14],
    lane3: [3, 7, 11, 15],
    lane4: [5, 8, 12, 16]
  },
  combinedLanes: [
    this.lanes.lane1,
    this.lanes.lane2,
    this.lanes.lane3,
    this.lanes.lane4
  ],
  emptyLane: function(data) {
    // available = [2, 3, 4, 5, 8, 9 , 12, 13, 14, 16]
    // taken = [1, 6, 7, 10, 11]
    var matched = [];
    for (var key in this.lanes) {
      if (this.lanes.hasOwnProperty(key)) {
        var lane = this.lanes[key];
        if (!match(lane, data.takenSlots)) {
          connect(matched, lane);
        }
      }
    }
    return matched;
  },
};

module.exports = Targeting;
/*
Each card needs to know what it does when it's clicked.
It needs to know if it has to use targeting onClick event.

Card Targeting object examples:

ongoingSpellCard.targeting = {
  'other': ['payerOngoing']
};
spellCard.targeting = {
  'other': ['enemyOngoing']
};
spellCard2.targeting = {
  'board': [
    ['enemy'],
    ['trap']
  ],
  'other': ['enemyHero', 'playerHero']
};
monsterCard.targeting = { 
  'board': ['player', 'melee']
 };
monsterCard2.targeting = { 
  'board': ['player', 'range', 'emptyLane']
 };
monsterCard2.targeting = {
  'board': [
    ['player', 'range', 'emptyLane']
  ],
  'other': ['enemyHero', 'playerHero']
};
monsterCard3.targeting = { 
  'board':[ 'player', 'range', 'emptyLane']
 };
*/

// GameView.passTargets(['enemyHero', {
//   'board': [0, 3, 5]
// }, 'playerHero'])
// // Can we highlight all modules at the same time?
// // If we go this route we wouldn't be able to do it for each module.
// // We would need to get all elements globally and apply highlight
// // at the same time.
// highlightFromList = function(viewsList, data) {
//   viewsList.forEach(function(view) {
//     if (view.name === 'board') {
//       this.highlight(data);
//     }
//     view.highlight()
//   });
// }