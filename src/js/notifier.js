var Notifier = {
  list: {},
  on: function(name, cb) {
    if (!this.list[name]) {
      this.list[name] = [];
    }
    // Create channel
    // console.log(this.list);
    this.list[name].push(cb);
  },
  emit: function(name, data) {
    if (!this.list[name]) {
      this.list[name] = [];
      console.log("No Event titled: " + name);
      return;
    }
    this.list[name].forEach(function(a) {
      a(data);
    });
  }
};

module.exports = Notifier;
