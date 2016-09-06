module.exports = {
	requireAuthenication: function(req, res, next){
		console.log('private page hit!!!');
		next();
	},
	logger: function(req, res, next){
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};