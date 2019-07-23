var Ajax = require('./ajax.js');
/**
 * TEMPLATING
 * We have 4 options:
 * 1) Use ajax to load external html templates. Requires more
 * work to set up and might be slow, because you need to load templates
 * with separate requests. It is also the most dynamic and flexible option.
 * 2) Store templates inside original index.html. Simple and Fast, but
 * becomes harder to manage with many templates stored in the same file.
 * 3) Store templates in separate html files, and use tools like Webpack
 * to put those templates inside index.html during build time. Complicated
 * set up. Fast during run time.
 * 4) Store templates as Html strings inside JavaScript file.
 * Very simple, but not very flexible and might get confusing with
 * large amounts of html.
 *
 * We will use a reasonable amount of HTML for small UI widgets.
 * We want to make this application extensible and
 * maintainable for future updates. Options 1 and 3 seems the best. 
 */
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
TemplateStorage = function(templates) {
  this.collection = templates || {};
};
TemplateStorage.prototype.get = function(name, data) {
  var template = this.collection[name];
  if (!template) {
    // TODO error handling
    return;
  }
  if (template.inline) {
    return parseStringToFrag(template.inline(data));
  }
  return template.frag.cloneNode(true);
};
TemplateStorage.prototype.render = function(name, container, data) {
  var tmpl = this.get(name, data);
  // TODO create bindables when we load the template inside TemplateStorage.
  container.appendChild(tmpl);
  console.log(container);
  return getBindedElements(tmpl);
};
TemplateStorage.prototype.addInline = function(name, template) {
  this.collection[name] = {
    name: name,
    type: 'inline',
    inline: template
  }
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
var parseStringToFrag = function(htmlString) {
  // We check if Template tag api is available on the browser
  // Then we can create a fragment out of it.
  var template = document.createElement('template');
  if ('content' in template) {
    template.innerHTML = htmlString;
    return document.importNode(template.content, true);
  }
  // If do not, we have to manually push html elements to the 
  // fragment.
  var frag = document.createDocumentFragment();
  var div = document.createElement('div');
  div.innerHTML = htmlString;
  while (div.firstChild) {
    frag.appendChild(div.firstChild);
  }
};
var getBindedElements = function(tmp) {
  var binds = tmp.querySelectorAll('.binds');
  return Array.prototype.reduce.call(binds,
    function(acc, cur) {
      if (cur.dataset.tmpl) {
        //acc.push({name: cur.dataset.tmpl,
        //         target: cur });
        acc[cur.dataset.tmpl] = cur;
        return acc;
      }
    }, {});
}
// ajax.getMultiple([
//     'localhost:3000/template.html',
//     'localhot:3000/template2.html'
// ], function(data) {
//     templates.load(data);
// });

// tmp.loadAllAjax(function() {
//   console.log("DONE LOADING TEMPLATES");
//   console.log(tmp.collection);
// });
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
    type: 'local',
    loadAll: true
  },
  hero: {
    name: 'hero',
    type: 'inline',
    inline: function(data) {
      // TODO We need to decide if we need template
      // tags for inline templates.
      return '<div class="hero-container">' +
        '<div class="hero-name binds" data-tmpl="name">' + data.name + '</div>' +
        '<div class="hero-image binds" data-tmpl="image">' + data.image + '</div>' +
        '<div class="hero-stats binds" data-tmpl="strength">' + data.stats + '</div>' +
        '<div class="hero-hp binds" data-tmpl="hp">' + data.hp + '</div>' +
        '</div> '
    }
  }
};

module.exports = new TemplateStorage(templates);