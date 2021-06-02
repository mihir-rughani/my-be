"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.logger = void 0;
const winston = require("winston");
const chalk = require("chalk");
exports.logger = winston.createLogger({
    level: "info",
    transports: [new winston.transports.Console()],
    exitOnError: false
});
// const stream = streamFunction => ({
// 	stream: streamFunction
// });
// const write = writeFunction => ({
// 	write: (message: string) => writeFunction(message)
// });
/**
 * Winston logger stream for the morgan plugin
 */
//export const winstonStream = stream(write(logger.info));
// Configure the debug module
// imports debug module
const Debug = require("debug");
//const debug = Debug("app:response");
/**
 * Debug stream for the morgan plugin
 */
//export const debugStream = stream(write(debug));
/**
 * Exports a wrapper for all the loggers we use in this configuration
 */
const format = (scope, message) => `[${scope}] ${message}`;
const parse = (args) => {
    let updatedArgs = [];
    if (args.length > 0) {
        args.forEach(arg => {
            if (arg === Object(arg)) {
                updatedArgs.push(JSON.stringify(arg));
            }
            else {
                updatedArgs.push(arg);
            }
        });
        return updatedArgs.join(",");
    }
    return "";
};
const warning = chalk.keyword("orange");
const info = chalk.keyword("yellow");
const Logger = (scope) => {
    const scopeDebug = Debug(scope);
    return {
        debug: (message, ...args) => {
            if (process.env.NODE_ENV !== "production") {
                exports.logger.debug(format(scope, message), parse(args));
            }
            scopeDebug(message, parse(args));
        },
        silly: (message, ...args) => {
            exports.logger.silly(chalk.cyan(format(scope, message), parse(args)));
        },
        info: (message, ...args) => {
            exports.logger.info(chalk.blue(format(scope, message), parse(args)));
        },
        success: (message, ...args) => {
            exports.logger.info(info(format(scope, message), parse(args)));
        },
        warn: (message, ...args) => {
            exports.logger.warn(warning(format(scope, message), parse(args)));
        },
        error: (message, ...args) => exports.logger.error(chalk.redBright(format(scope, message), parse(args)))
    };
};
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map