import { config } from "../config/config";

interface ConfigurationFireStore {
	admin: {};
	db: {};
}

interface ConfigurationServer {
	host: string;
	port: string;
	graphiql: boolean;
}

interface ConfigurationLoggerConsole {
	level: string;
}

interface ConfigurationLogger {
	host?: string;
	port?: string;
	file?: ConfigurationLoggerConsole;
	console: ConfigurationLoggerConsole;
	debug: string;
}

interface Configuration {
	aws: {};
	redShiftClient: {};
	fireStoreDb: ConfigurationFireStore;
	server: ConfigurationServer;
	logger: ConfigurationLogger;
}

export class Environment {
	static getName(): string {
		return process.env.ENV || "dev";
	}

	static getConfig(envName:string): Configuration {
		return config[envName];
	}
}
