export default async function admin(app) {
	app.addHook('onRequest', app.authenticate);

	app.get('/', async (req, reply)=>{
		return 'You are authenticated.';
	});
}