/* split of undefined error
var fs = require('fs');
var lines = fs.readFile(process.argv[2], 'utf8', function callback (err, data) { if (!err) {return data} else { return 'error!' } } ).split('\n').length -1;
console.log(lines);
*/

var fs = require('fs');
var path = process.argv[2];

fs.readFile(path, 'utf8', function(err, data) {
  var lines = data.split('\n').length - 1;
  console.log(lines);
});

/* OFFICIAL SOLUTION
var fs = require('fs')
var file = process.argv[2];

fs.readFile(file, function(err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
*/

var fs = require('fs');
var path = process.argv[2];
