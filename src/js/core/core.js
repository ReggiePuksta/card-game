/**
 * Core Logic that Plugs the MVC type of modules
 * TODO 
 * 1) We need to create a hierarchy eather through the view or controller
 *
 */

var Composition = function(logicEngine) {
  this.tree = [];
  
};

Composition.prototype.addModule = function(controller) {
 this.view.addSub(controller.view);
 this.models.addSub(controller.model);
};

