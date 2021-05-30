

enum EnvironmentEnum  {
	Development = "dev",
	Sit = "sit",
	Stg = "stg",
	Production = "prd"
}

export const config = {
	development: {
		lambda: "lambda-dev-microservices-email",
		fromEmail:"qantasmalltest@qantasloyalty.com"
	},
	sit: {
		lambda: "lambda-sit-microservices-email",
		fromEmail:"qantasmalltest@qantasloyalty.com"
	},
	staging: {
		lambda: "lambda-stg-microservices-email",
		fromEmail:"qantasmalltest@qantasloyalty.com"
	},
	production: {
		lambda: "lambda-prd-microservices-email",
		fromEmail:"frequent_flyer@qantas.com.au"
	},
	test: {
		lambda: "lambda-dev-microservices-email",
		fromEmail:"qantasmalltest@qantasloyalty.com"
	}
};


export const getLambdaEndpoint = (envName:string) => {
	switch (envName) {
		case EnvironmentEnum.Development:
			return config.development.lambda;
		case EnvironmentEnum.Sit:
			return config.sit.lambda;
		case EnvironmentEnum.Stg:
			return config.staging.lambda;
		case EnvironmentEnum.Production:
			return config.production.lambda;

	}
};

export const getFromEmail = (envName:string) => {
	switch (envName) {
		case EnvironmentEnum.Development:
			return config.development.fromEmail;
		case EnvironmentEnum.Sit:
			return config.sit.fromEmail;
		case EnvironmentEnum.Stg:
			return config.staging.fromEmail;
		case EnvironmentEnum.Production:
			return config.production.fromEmail;

	}
};
