var EventEmitter = require('events');

var test = new EventEmitter;

test.on('someThing', function(msg) {
    console.log(msg);
});

test.emit('someThing', 'Hello World!');

