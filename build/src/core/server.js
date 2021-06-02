"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = exports.log = void 0;
const _1 = require("./");
exports.log = _1.Logger("app:core:server");
class Server {
    // static run(app: express.Application, port: string): http.Server {
    // 	//log.debug(port);
    //
    // 	const server = app.listen(this.normalizePort(port));
    // 	server.on("listening", () => this.onListening(server));
    // 	server.on("error", error => this.onError(server, error));
    // 	log.debug("Server was started on environment %s", Environment.getName());
    //
    // 	return server;
    // }
    static normalizePort(port) {
        const parsedPort = parseInt(port, 10);
        if (isNaN(parsedPort)) {
            return "";
        }
        if (parsedPort >= 0) {
            return parsedPort;
        }
        return false;
    }
    static onListening(server) {
        exports.log.debug(`Listening on ${this.bind(server.address())}`);
    }
    static onError(server, error) {
        if (error["syscall"] !== "listen") {
            throw error;
        }
        const addr = server.address();
        // handle specific listen errors with friendly messages
        switch (error["code"]) {
            case "EACCES":
                exports.log.error(`${this.bind(addr)} requires elevated privileges`);
                process.exit(1);
                break;
            case "EADDRINUSE":
                exports.log.error(`${this.bind(addr)} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
    static bind(addr) {
        return typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map