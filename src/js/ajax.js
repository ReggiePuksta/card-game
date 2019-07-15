// TODO learning ajax request with vanilla Js
// TODO Sort out error handling for Ajax() async requests
var Ajax = function(xhrObject) {
  // TODO Do we need multiple xhr objects for each request or can we
  // reuse it?
};
Ajax.prototype._transport = function(options, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.open(options.type, options.url);
  xhr.send(options.data);
};
Ajax.prototype.get = function(url, callback) {
  var options = {
    type: 'GET',
    url: url,
    data: null
  };
  this._transport(options, callback);
};
// TODO getMultiple() functionality might not be necessary
// if we manually loop single get() requests for each url
Ajax.prototype.getMultiple = function(urls, callback) {
  var that = this;
  var options = {
    'type': 'GET',
    data: null,
  };
  promise.create(urls.length);
  // We need to execute callback
  for (var i = 0, len = urls.length; i < len; i++) {
    oprtions.url = urls[i];
    this._transport(options, promise.cb);
  }
  promise.done(callback);
};

Ajax.prototype.post = function(url, data, callback) {
  var options = {
    type: 'POST',
    url: url,
    data: data
  };
  this._transport(options, callback);
};

module.exports = Ajax;
/*  Template --> View procedure 
 *  1) Check if template is in the cache
 *  2) If not there: init Upload all templates
 *    a) Store as strings or html templates
 *  3) Templating has to work with router 
 *  ---Binding()---
 *  3) We require a template and covert it to the fragment
 *    for each bindable object; Or we clone fragment?
 *  4) Bind the context created by the model to the fragment
 *  ---render()---
 *  5) Append the fragment in the DOM
 */
//TODO send this to template tests
var templates = {
  mainMenu: {
    url: 'http://localhost:3000/templates/main_menu.html',
  },
  playerMenu: {
    url: 'http://localhost:3000/templates/player_menu.html',
  },
  card: {
    url: 'http://localhost:3000/templates/card_temp.html',
    load: true,
  },
  board: {
    url: 'http://localhost:3000/templates/board_temp.html',
    load: true,
  }
};
TemplateStorage = function(templateList) {
  this.collection = templateList;
};
TemplateStorage.prototype.exportURLs = function() {
  var urls = [];
  for (var i = 0, len = this.collection.length; i < len; i++) {
    urls.push(this.collection[i].url);
  }
  return urls;
};
TemplateStorage.prototype.loadAll = function(callback) {
  var ajax = new Ajax();
  var num = this.collection.length;
  var i;
  // TODO rewrite from forEach to another es5 loop
  // so that we could ignore
  this.collection.forEach(function(template) {
    if (template.load === false) {

    }
    ajax.get(template.url, function(data) {
      template.textFragment = data;
      if (i++ === num) {
        // We load the callback function when all responses
        // are received
        callback();
      }
    });
  });
};
TemplateStorage.prototype.loadOne = function(name, callback) {
  var template = this.collection[name];
  if (template &&template.url) {
    ajax.get(template.url, function(data) {
      template.strData = data;
      callback();
    });
  } else {
    throw "Template with this name doesn't exist";
  }
};
TemplateStorage.prototype.importCollection = function() {};
// ajax.getMultiple([
//     'localhost:3000/template.html',
//     'localhot:3000/template2.html'
// ], function(data) {
//     templates.load(data);
// });

var tmp = new TemplateStorage(templates);
tmp.loadAll(function() {
  console.log("DONE LOADING TEMPLATES");
  console.log(tmp.collection);
});
