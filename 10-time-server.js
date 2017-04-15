// var net = require('net');
// var server = net.createServer(function(socket)){
//     socket.end(getFormattedCurrentTime() + "\")
// }

var net = require('net');
var portnumber = Number(process.argv[2])

var server = net.createServer(function(socket) {
    // socket handling logic
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    var returnString = pad(year, 4) + '-' + pad(month, 2) + '-' + pad(day, 2) + ' ' + pad(hours, 2) + ':' + pad(minutes, 2);

    socket.write(returnString + "\n");
    socket.end();
});

server.listen(portnumber);

function pad(number, zeroes) {
    var lotsOfZeroes = '000000000000000000000';
    return (lotsOfZeroes + number.toString()).slice(-zeroes);
}



/*
var year = date.getFullYear()
var month = date.getMonth()
var day = date.getDate()
var hour = date.getHours()
var minute = date.getMinutes()

var dateFormat = year + "-" + month + "-" + day + " " + hour + ":" minute;
*/
