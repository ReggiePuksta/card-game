define(function(require) {
  /**
   * Basic templating class
   *
   * We have 3 options:
   * 1) Use ajax to load external html templates. Requires more
   * work but is more flexible.
   * 2) Store templates inside original index.html. Simple, but
   * becomes hard to manage with many templates
   * 3) Store templates as Html strings inside JavaScript file.
   * Very simple, but not very flexible and might get confusing with
   * large amount of html.
   *
   * We will use a reasonable amount of HTML for small UI widgets * and we want to make this application extensible and
   * maintainable for future updates. So the 1st options suits the
   * best. 
   */
  function getEl(name) {
    return document.getElementById(name);
  }

  function getElClass(ele, name) {
    return ele.getElementsByClassName(name);
  }
  var Template = function() {
    // TODO create Ajax Class for retreaving HTML templates.
    // Reuse same Ajax class for server data??
    // Cashed templates
    this.template = {};
  };
  // Get the template from the cache
  Template.prototype.find = function(templateName) {
    for (var template in this.templates) {
      return template;
    }
  };
  Template.prototype.render = function(templateName, dataObj) {
    var template = this.find(templateName);
    // Need to figure out regEx to replace template string data
  };
  Template.prototype.attachTo = function(first_argument) {

  };
  Template.prototype.insertInto = function(first_argument) {

  };

  Template.prototype.getCardDom = function(data) {
    return '<div class="cardFrame">' +
      '<div class="name">' + data.name + '</div>' +
      '<div class="cost">' + data.cost + '</div>' +
      '<div class="attack">' + data.attack + '</div>' +
      '<div class="ret">' + data.ret + '</div>' +
      '<div class="hp">' + data.hp + '</div></div>';

  };
  Template.prototype.renderCardDom = function(element, data) {
    element.innerHTML += this.renderCard(data);
  };
var CardsData = [{
    name: 'Joseph',
    hp: 5,
    attack: 2,
    ret: 1,
    cost: 3
}, {
    name: 'Snake',
    hp: 2,
    attack: 2,
    ret: 0,
    cost: 1
}, {
    name: 'Wolf',
    hp: 3,
    attack: 3,
    ret: 0,
    cost: 2
}];

});
