var path = require('path');
var module = require('./module');
var dir = process.argv[2];
var ext = process.argv[3];

var callback = function (err, list) {
    if (err) return console.error(err);
    list.forEach(function (file) {
        console.log(file);
    })
}

module(dir, ext, callback);


/* OFFICIAL SOLUTION

var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
if (err) {
    return console.error('There was an error:', err)
}

    list.forEach(function (file) {
    console.log(file)
    })
})

*/
