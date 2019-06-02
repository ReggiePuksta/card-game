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
