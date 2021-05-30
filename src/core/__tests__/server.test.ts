import { Server } from "../server";
jest.mock("../../config/fireStore");
import app  from "../../../index";

describe("Server test", () => {
	test("log info should work", () => {
		const mockAppF = jest.fn();
		const a = app;
		a.listen = mockAppF.bind(a);

		const mockF = jest.fn();
		const l = Server;
		l.onListening = mockF.bind(l);

		Server.onListening(app.listen("9091"));
		expect(mockF.mock.calls[0]).toEqual([undefined,]);
	});

});

describe("Server test", () => {


	test("test normalizePort", async () => {
		const info = Server.normalizePort("9090");
		return expect(info).toBe(9090);
	});

	test("test normalizePort", async () => {
		const info = Server.normalizePort("-1");
		return expect(info).toBe(false);
	});

	test("test normalizePort", async () => {
		const info = Server.normalizePort("1");
		return expect(info).toBe(1);
	});

	test("test normalizePort", async () => {
		const info = Server.normalizePort("s23");
		return expect(info).toBe("");
	});

	test("test normalizePort", async () => {
		const info = Server.normalizePort("0");
		return expect(info).toBe(0);
	});


});
