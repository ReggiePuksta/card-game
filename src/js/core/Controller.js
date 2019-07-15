var Controller = function(service, view) {
  this.service = service;
  this.view = view;
  this.viewEvents = {};
};
Controller.prototype.setService = function(num) {
  this.service = num;
};
Controller.prototype.getService = function() {
  return this.service;
};
Controller.prototype.init = function() {
  this.view.render(this.service.getModel());
};
Controller.prototype.setBindings = function() {
  this.view.on('click', this.clickHandler.bind(this));
  this.view.on('hover', this.hoverHandler.bind(this));
};
Controller.prototype.addViewEvent= function(name, loc, func) {
  this.view.on('click', this.clickHandler.bind(this));
  this.view.on('hover', this.hoverHandler.bind(this));
};

module.exports = Controller;
