var haiku = require('./haiku');
var textFile = process.argv[2];

haiku.createHaiku([5,7,5], textFile);
