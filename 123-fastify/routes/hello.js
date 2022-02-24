export default async function hello(app, opts) {
	app.get('/', async ()=>{
		return {msg: 'Hi Cody.'}
	})
}