const fastify = require('fastify')({
	logger: true
});

fastify.register(require('./our-db-connector'));
fastify.register(require('./our-first-route'));

(async () => {
	try {
		await fastify.listen(8080);
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);		
	} 
})(); 