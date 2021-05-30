const localPort = "3500";

export const configMongoose = {
	connection : process.env.NODE_ENV === "production" ? "mongodb://mihir:ABCxyz123@ds117423.mlab.com:17423/graphql" : "mongodb://localhost:27017/streaming"
};

export const config = {
	nNumber: 50,
	dev: {
		server: {
			host: "localhost",
			port: process.env.PORT || localPort,
			graphiql: true
		},
		logger: {
			debug: "app*",
			console: {
				level: "error"
			}
		}
	},

	sit: {
		server: {
			host: "localhost",
			port: process.env.PORT || localPort,
			graphiql: true
		},
		logger: {
			debug: "app*",
			console: {
				level: "error"
			}
		}
	},

	stg: {
		server: {
			host: "localhost",
			port: process.env.PORT || localPort,
			graphiql: true
		},
		logger: {
			debug: "app*",
			console: {
				level: "error"
			}
		}
	},

	prd: {
		server: {
			host: "localhost",
			port: process.env.PORT || localPort,
			graphiql: true
		},
		logger: {
			debug: "app*",
			console: {
				level: "error"
			}
		}
	},

	test: {
		server: {
			host: "localhost",
			port: process.env.PORT || localPort,
			graphiql: false
		},
		logger: {
			debug: "",
			console: {
				level: "none"
			}
		}
	}
};
