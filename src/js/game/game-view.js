// Composite view if we need it.
var GameView = function() {
  this.components = {};
}
GameView.prototype.addComponent = function(view) {
  this.components[view.name] = view;
};
GameView.prototype.addComponents = function(viewsObject) {
  helper.extend(this.components, viewsObject);
};
GameView.prototype.render = function() {
    for (var i = 0; l = this.components.length, i < l; i++) {
        var view = this.components[i];
        view.render();
    }
};

module.exports = GameView;