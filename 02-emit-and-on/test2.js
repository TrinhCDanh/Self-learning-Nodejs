const EventEmitter = require('events');

class Person extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
}

var person1 = new Person('Trinh');
var person2 = new Person('Cong');
var person3 = new Person('Danh');

var person = [person1, person2, person3];

person.forEach((elem) => {
    elem.on('talk', function(msg) {
        console.log(elem.name + ' said that: ' + msg);
    })
});

person1.emit('talk', 'Hello');
