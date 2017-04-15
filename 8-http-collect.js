var bl = require('bl');
var http = require('http');
var url = process.argv[2];

var sum = 0;
var content = "";

http.get(url, function(response){
    response.on("data", function(data) {
        sum += data.length;
        content += data;
    }).setEncoding("utf8").pipe(bl(function(err, data){
        if(err) {
            console.error(err);
        } else {
            console.log(sum);
            console.log(content);
        }
    }));
});

// console.log(process.argv)
//console.log(data);
