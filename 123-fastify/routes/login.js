import error from 'http-errors';
import S from 'fluent-json-schema';

export default async function login(app, opts) {
	app.post('/login', {
		schema: {
			body: S.object()
			.prop('username', S.string().required())
			.prop('password', S.string().required())
		}
	},
	async (req, reply) => {
		const { username, password } = req.body;

		if (username !== 'Code' || password !== 'Witcher') {
			throw new error.Unauthorized('Unauthorized.');
		}

		const token = app.jwt.sign({ username });

		return { token };
	})
}