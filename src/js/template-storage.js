var Ajax = require('./ajax.js');
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
var templates = {
  header: {
    name: 'header',
    url: 'http://localhost:3000/templates/cardTemp.html',
    loadAll: true,
    frag: {}
  },
  board: {
    name: 'board',
    url: 'http://localhost:3000/templates/boardTemp.html',
    type: 'xhr',
    loadAll: true,
  },
  mainMenu: {
    name: 'mainMenu',
    type:'local',
    loadAll: true
  }
};
TemplateStorage = function() {
  this.collection = {};
};
TemplateStorage.prototype.get= function(name) {
  if (!this.collection[name]) {
    // TODO error handling
    return;
  }
  return this.collection[name].frag.cloneNode(true);
};
TemplateStorage.prototype.exportURLs = function() {
  var urls = [];
  for (var i = 0, len = this.collection.length; i < len; i++) {
    urls.push(this.collection[i].url);
  }
  return urls;
};
TemplateStorage.prototype.loadAll = function(cb) {
  // Load callback function only after both methods have loaded the
  // data. TODO Should use promises here.
  var i = 0;
  this.loadAllDom(function(data) {
    i++;
    if (i === 2) {
      cb(data);
    }
  });
  this.loadAllAjax(function(data) {
    i++;
    if (i === 2) {
      cb(data);
    }
  });
};
TemplateStorage.prototype.loadAllDom = function(cb) {
  var templates = document.getElementsByClassName('template');
  for (var i = 0, len = templates.length; i < len; i++) {
    var frag = document.importNode(template.content, true);
    this.extendList(frag);
  }
  cb();
};
TemplateStorage.prototype.loadAllAjax = function(cb) {
  var ajax = new Ajax();
  // We use two counters in one loop instead of using two loops 
  // 1) To count how many templates should be loaded
  // 2) To count how many templates we allready received
  var loadableTmpl = 0,
    loaded = 0;
  for (var prop in this.collection) {
    var tmpl = this.collection[prop];
    if (tmpl.loadAll !== false) {
      loadableTmpl++;
      ajax.get(template.url, loadAllCb(tmpl, loaded, loadableTmpl, cb));
    }
  }
};
var loadAllCb = function(template, i, num, callback) {
  return function(data) {
    template.textFragment = data;
    if (i++ === num) {
      // We load the callback function when all responses
      // are received
      callback();
    }
  };
};
TemplateStorage.prototype.loadOne = function(name, callback) {
  var template = this.collection[name];
  if (template && template.url) {
    ajax.get(template.url, function(data) {
      template.textFragment = data;
      template.fragment =
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
tmp.loadAllAjax(function() {
  console.log("DONE LOADING TEMPLATES");
  console.log(tmp.collection);
});

module.exports = TemplateStorage;
