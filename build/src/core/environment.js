"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
const config_1 = require("../config/config");
class Environment {
    static getName() {
        return process.env.ENV || "dev";
    }
    static getConfig(envName) {
        return config_1.config[envName];
    }
}
exports.Environment = Environment;
//# sourceMappingURL=environment.js.map