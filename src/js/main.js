/* Game initialisation procedure */
/* Before the game starts we have:
    + Basic MVC description classes: Model, View, Ctrl
    + TemplateStorage
    + UserData
    + GameData:
  4) Instantiate all views. 
  5) Instantiate all controllers - connect models and views.
  6) Show all views in order:
    + GameView - Background, UserView.
    + Board
    + Player and enemy heroes -> show animation appearing
    + Player and enemy Hand -> show animation dealing
*/

import GameView from "./game/game-view.js";

import "../css/normalize.css";
import "../css/style.css";

// WebSocket.on("load", function (data) {
//   GameModel.update(data);
// });

// gameView.renderAll();
// Example of Incomming Data from websockets
