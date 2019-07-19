var Controller = function(service, view) {
  this.service = service;
  this.view = view;
  // TODO we need to add event handling 
  this.viewEvents = [{name: 'HeroActivation', action: 'click', elem: 'button1',  function() {

  }}];
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
Controller.prototype.addViewEvent= function(name, func) {
};
Controller.prototype.enableViewEvent= function(name) {
};
Controller.prototype.disableViewEvent= function(name) {
};

module.exports = Controller;
