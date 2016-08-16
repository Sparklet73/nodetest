var http = require('http');

var req = http.request({
	hostname: 'www.googe.com',
	path: '/',
	method: 'GET'
}, function(res) {
	console.log('Processed.');

	res.on('data', function(chunk) {
		console.log(chunk.toString());
	});

	res.on('end', function(chunk) {
		process.exit();
	});
});
req.end();