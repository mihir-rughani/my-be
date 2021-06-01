import { createConnection } from "typeorm";


export const dbConnect = async () => {
	return await createConnection(
		{
			type: "postgres",
			schema: "public",
			host: "localhost",
			port: 5432,
			username: "mihirrughani",
			password: "",
			database: "MaseSays",
			synchronize: false,
			logging: false
		}
	);
};
