var fs = require('fs')
var http = require('http')
var port = Number(process.argv[2])
var file = process.argv[3]

// HTTP Server
http.createServer(function(req, res) {
    // Response logic
    res.writeHead(200, {'content-type':'text/plain'});
    fs.createReadStream(file).pipe(res);
}).listen(port);
