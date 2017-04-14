var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var arr = str.split('\n');
console.log(arr.length-1);

/*
OFFICIAL SOLUTION

var fs = require('fs')
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)

OR

var fs = require('fs')
var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
console.log(lines)

*/
