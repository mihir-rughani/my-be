declare namespace custom_config {

	interface Configuration {
		aws: {};
		redShiftClient: {};
		fireStoreDb: ConfigurationFireStore;
		server: ConfigurationServer;
		logger: ConfigurationLogger;
	}

	interface ConfigurationFireStore {
		admin: {};
		db: {};
	}

	interface ConfigurationServer {
		host: string;
		port: string;
		graphiql: boolean;
	}

	interface ConfigurationLogger {
		host?: string;
		port?: string;
		file?: ConfigurationLoggerConsole;
		console: ConfigurationLoggerConsole;
		debug: string;
	}

	interface ConfigurationLoggerConsole {
		level: string;
	}
}
