var fs = require('fs');
// var path = process.argv[2];
fs.readdir(process.argv[2], function callback(err, list) {
	if(err){
		console.log(err);
	} else {
	for(i=0; i < list.length; i++){
		if (list[i].endsWith('.'+process.argv[3])){
			console.log(list[i]);
		}
	}
  }
});

/*
var fs = require('fs')
var path = require('path')
var folder = process.argv[2]
var ext = '.' + procsess.argv[3]

fs.readdir(folder, function(err, files){
	if(err) return console.error(err)
	files.forEach(function (file) {
		if (path.extname(file) === ext) {
		console.log(file)
		}
	})
})
*/
