import { join } from 'desm';
import JWT from 'fastify-jwt';

export default async function(app, opts) {
	app.register(JWT, {
		secret: 'CHANGEME'
	});
	
	app.decorate('authenticate', async function(req, reply){
		try {
			await req.jwtVerify()
		} catch (err) {
			reply.send(err);
		}
	})
	
	app.register(import('fastify-autoload'), {
		dir: join(import .meta.url, 'routes')
	});
}