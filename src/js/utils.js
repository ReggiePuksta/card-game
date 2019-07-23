  var utils = {};
  // Merging two objects
  utils.extend = function(obj, src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        obj[key] = src[key];
      }
      return obj;
    }
  };

  utils.findObjectByKey = function(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  };
  utils.qs = function(id) {
    document.getElementById(id);
  }

  module.exports = utils;
