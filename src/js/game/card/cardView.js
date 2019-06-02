var CardView =  function() {
  this.template = {};
  this.binders = {};
};
var animations = {
  hp : function() {
    this.container.
  };
}

// TODO WE need to pre-scan the fragment in some way, so that we wouldnt
// have to scan it all over for each copy of an oject.
var binders = [{
  target: url,
  key: 'hp',
  container: {},
  update: function(val, callback) {
    this.target.textContent = val;
    if (callback) {
      callback(this.key);
    }
  }
}, {
  target: text,
  key: 'name',
  container: {},
  update: function(val) {
    this.target.textContent = val;
  }
}];
Cardview.prototype.setUp = function(type, context) {
  // TODO option: We can use inheritance to extend TemplateStorage to additional
  // functionality to manage card templates.
  this.template = TemplateStorage.get('card-'+ type);
  this.binders = Binder.scan(this.template);
  // Binder.bindScanned(context, this.binders);
  for (var i = 0, len = this.binders.length; i < len; i++) {
    var binder = this.binders[i];
    var cardProperty = binder.key.toLowerCase();
    this[cardProperty] = binder; 
  }
};
Cardview.prototype.render = function() {
};
CardView.prototype.increaseHp= function() {
  Animation.increaseHp(this.hp);
};
CardView.prototype.reduceHp = function() {
  Animation.increaseHp(this.hp);
};

// <div class='card-creature' data-card-id="{{id}}">
//   <div class="card-name">{{name}}</div>
//   <div class="card-cost">{{cost}}</div>
//   <div class="card-stats">{{stats}}</div>
//   <div class="card-hp">{{hp}}</div>
// </div>

module.exports = CardView;
