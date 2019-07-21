var View = function(container) {
    this.$container = helper.qs(container);
    this.animate = true;
};
View.prototype.build= function(data) {
  this.render(data);
  this.bindChanges(binds);
};
View.prototype.render= function(data) {
  var binds = template.render('stats', this.$container, data);
};
View.prototype.bindChanges= function(binds) {
  for (var i = 0, len = binds.length; i < len; i++) {
    // We need to check if the property exists
    var prop = binds[i];
    this['$'+prop.name]= prop.ele;
    Notifier.on(this.viewName + prop.name, this['update'+ prop.name]);
  }
};
View.prototype.update = function(prop, data) {
  this[prop].textContent = data.value;
  if (data.change) {
    animation.use('increase', this[prop]); 
  } else {
    animation.use('decrease', this[prop]);
  }
};
