'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: 8000
});

server.route({
	method: 'GET',
	path: '/hello',
	handler: function(request, reply) {
		return reply('hello world');
	}
});

server.route({
	method: 'GET',
	path: '/{name}',
	handler: function(request, reply){
		reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
	}
});

server.start((err) => {
	if(err){
		throw err;
	}
	console.log('Server running at:', server.info.uri);
});