
var http = require('http');
// var url = 'http://google.com';
var url = process.argv[2];

http.get(url, function(response){
    response.on("data", function(data) { console.log(data); }).setEncoding("utf8");
});

// console.log(process.argv)
