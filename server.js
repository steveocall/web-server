var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthenication: function(req, res, next){
		console.log('private page hit!!!');
		next();
	},
	logger: function(req, res, next){
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.get ('/about', middleware.requireAuthenication, function (req, res){
	res.send('About Me!!');
});

app.use(express.static (__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Express server has started on port ' + PORT);	
});