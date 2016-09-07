var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get ('/about', middleware.requireAuthenication, function (req, res){
	res.send('About Me!!');
});

app.use(express.static (__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Express server has started on port ' + PORT);	
});