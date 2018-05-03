var $ = require('jquery');
var	Person = require('./modules/Person');

var john = new Person("JOHN", "RED");
john.greet();

var jane = new Person("Jane", "Black");
jane.greet();