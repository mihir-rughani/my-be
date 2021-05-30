const request = require('supertest');
import app from '../../../index';
jest.mock("../../config/fireStore");

const req = request(app);

describe('Test the root path', () => {
	test('It should response the GET method', () => {
		return req.get('/').then((res) => {
			expect(res.body).toMatchObject({ msg: "Welcome to the Points Pilot API", version: "2.0" });
			expect(res.statusCode).toBe(200);

		});
	});

	test('It should response the GET method', () => {
		return req.get('/api').then((res) => {
			expect(res.body).toMatchObject({ msg: "Welcome to the Points Pilot API", version: "2.0" });
			expect(res.statusCode).toBe(200);

		});
	});

	test('It should response the GET method', () => {
		return req.options('/').then((res) => {
			expect(res.statusCode).toBe(200);

		});
	});

	test('It should response the GET method', () => {
		return req.post('/graphql', {})
			.set("anonymous", 'true')
			.set('uid', 'abc')
			.then((res) => {
			expect(res.body).toMatchObject({"data":{"error":{"graphQLErrors":["AccessDenied!"],"message":{}}}});
			expect(res.statusCode).toBe(400);
		});
	});

	test('It should response the GET method', () => {
		return req.post('/graphql', {}).then((res) => {
			expect(res.body).toMatchObject({"data":{"error":{"graphQLErrors":["AccessDenied!"],"message":{}}}});
			expect(res.statusCode).toBe(400);
		});
	});
});
