var notifier = require('../../src/js/notifier.js');

describe('Notifier', function() {
  it('should notify boolean true data', function(done) {
    notifier.on('test1', function(data) {
      expect(data).toStrictEqual(true);
      done();
    });
    notifier.emit('test1', true);
  });
  it('should notify boolean false', function(done) {
    notifier.on('test2', function(data) {
      expect(data).toStrictEqual(false);
      done();
    });
    notifier.emit('test2', false);
  });
  it('should notify string data', function(done) {
    notifier.on('test3', function(data) {
      expect(data).toStrictEqual('received');
      done();
    });
    notifier.emit('test3', 'received');
  });
  it('should notify object data', function(done) {
    notifier.on('test4', function(data) {
      expect(data).toStrictEqual({
        name: "Patrick"
      });
      done();
    });
    notifier.emit('test4', {
      name: "Patrick"
    });
  });
  it('should notify array data', function(done) {
    notifier.on('test5', function(data) {
      expect(data).toStrictEqual([1, 2, 3]);
      done();
    });
    notifier.emit('test5', [1, 2, 3]);
  });

  it('should receive data multiple times for the same channel', function(done) {
    var stack = [];
    var i = 0;
    notifier.on('test6', function(data) {
      stack.push(data);
      if (i === 1) {
        expect(stack[0]).toBe('first');
        expect(stack[1]).toBe('second');
        done();
      }
      i++;
    });
    notifier.emit('test6', 'first');
    notifier.emit('test6', 'second');
  });
});
