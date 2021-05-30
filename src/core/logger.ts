import * as winston from "winston";
import * as chalk from "chalk";

export const logger = winston.createLogger({
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
import * as Debug from "debug";
//const debug = Debug("app:response");

/**
 * Debug stream for the morgan plugin
 */
//export const debugStream = stream(write(debug));

/**
 * Exports a wrapper for all the loggers we use in this configuration
 */
const format = (scope: string, message: string): string =>
	`[${scope}] ${message}`;

const parse = (args: any[]) => {
	let updatedArgs: any[] = [];
	if (args.length > 0) {
		args.forEach(arg => {
			if (arg === Object(arg)) {
				updatedArgs.push(JSON.stringify(arg));
			} else {
				updatedArgs.push(arg);
			}
		});
		return updatedArgs.join(",");
	}
	return "";
};

const warning = (chalk as any).keyword("orange");
const info = (chalk as any).keyword("yellow");

export const Logger = (scope: string) => {
	const scopeDebug = Debug(scope);
	return {
		debug: (message: string, ...args: any[]) => {
			if (process.env.NODE_ENV !== "production") {
				logger.debug(format(scope, message), parse(args));
			}
			scopeDebug(message, parse(args));
		},
		silly: (message: string, ...args: any[]) => {
			logger.silly((chalk as any).cyan(format(scope, message), parse(args)));
		},
		info: (message: string, ...args: any[]) => {
			logger.info((chalk as any).blue(format(scope, message), parse(args)));
		},
		success: (message: string, ...args: any[]) => {
			logger.info(info(format(scope, message), parse(args)));
		},
		warn: (message: string, ...args: any[]) => {
			logger.warn(warning(format(scope, message), parse(args)));
		},
		error: (message: string, ...args: any[]) =>
			logger.error((chalk as any).redBright(format(scope, message), parse(args)))
	};
};
