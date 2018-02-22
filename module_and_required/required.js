var module = require('./module');

var arr = [1,2,3];
var a = 1;
var b = 1;

module.dem(arr);
module.chao();
module.tinh(a, b);

var Dongvat = module.classdv;
var dongvat = new Dongvat('KFC', 'Coca Cola');
console.log(dongvat);

var Heo = module.classheo;
var heo = new Heo('KFC', 'Coca Cola', '8h');
console.log(heo);
