'use strict';

const { Readable } = require('stream');

async function* upper(res) {
	for await (const chunk of res) {
		yield chunk.toString().toUpperCase();
	}
}

module.exports = async (fastify, opts) => {
	fastify.get('/', async (request, reply) => {
		const { url } = request.query;
		try {
			new URL(url);
		} catch (err) {
			throw fastify.httpErrors.badRequest();
		}

		return reply.from(url, {
			onResponse(req, rep, res) {
				rep.send(Readable.from(upper(res)));
			}
		});
	});
};