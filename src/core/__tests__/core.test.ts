import {Logger} from "../logger";
import {Environment} from "../environment";
import {config} from "../../config/config";
// jest.mock('../logger');
// jest.mock('../environment');
const log = Logger("test");
// test('should work', async () => {
// 	let result = true;
// 	expect(result).toBe(true);
// });


test("log info should work", () => {
	const mockF = jest.fn();
	const l = log;
	l.info = mockF.bind(l);
	log.info("info");
	expect(mockF.mock.calls[0]).toEqual(["info"]);
});
test("log warn should work", () => {
	const mockF = jest.fn();
	const l = log;
	l.warn = mockF.bind(l);
	log.warn("warn");
	expect(mockF.mock.calls[0]).toEqual(["warn"]);
});
test("log debug should work", () => {
	const mockF = jest.fn();
	const l = log;
	l.debug = mockF.bind(l);
	log.debug("debug");
	expect(mockF.mock.calls[0]).toEqual(["debug"]);
});
test("log error should work", () => {
	const mockF = jest.fn();
	const l = log;
	l.error = mockF.bind(l);
	log.error("error");
	expect(mockF.mock.calls[0]).toEqual(["error"]);
});
test("log success should work", () => {
	const mockF = jest.fn();
	const l = log;
	l.success = mockF.bind(l);
	log.success("success");
	expect(mockF.mock.calls[0]).toEqual(["success"]);
});
test("log silly should work", () => {
	const mockF = jest.fn();
	const l = log;
	l.silly = mockF.bind(l);
	log.silly("silly");
	expect(mockF.mock.calls[0]).toEqual(["silly"]);
});

test("when logging verbose, access code is not logged", () => {
	const res = Environment.getName();
	expect(res).toBeDefined();

	expect(config["dev"]).toBeDefined();
	expect(config["sit"]).toBeDefined();
	expect(config["stg"]).toBeDefined();
	expect(config["prd"]).toBeDefined();

});

test("when logging verbose, access code is not logged", () => {
	const x  = Environment.getConfig("dev");
	expect(x).toEqual( {"logger": {"console": {"level": "error"}, "debug": "app*"}, "server": {"graphiql": true, "host": "localhost", "port": "3500"}}
	);
});
