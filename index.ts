import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import { buildSchema } from "type-graphql";
import { graphqlHTTP } from "express-graphql";
import * as dotenv from "dotenv";
import { resolvers } from "./src/prisma/generated/type-graphql";
import { PrismaClient } from "@prisma/client";

const PORT = process.env.PORT || 3500;
const prisma = new PrismaClient();

class Context {
	prisma: any;
	constructor(prisma: any) {
		this.prisma = prisma;
	}
}
dotenv.config();
// (async () => {
// 	await dbConnect();
// })()

const app = express();
app.set("port", process.env.PORT || 3500);
app.use(
	bodyParser.json({
		type: ["json", "application/csp-report"]
	})
);
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Methods",
		"GET, PUT, POST, DELETE, OPTIONS"
	);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization, Anonymous, Uid"
	);

	if ("OPTIONS" === req.method) {
		res.sendStatus(200);
	} else {
		next();
	}
});

app.get("/", (req, res) => {
	console.log("Health check API");
	let revision = "1.0";
	res.json({ msg: "Welcome to the API", version: revision });
});

app.get("/api", (req, res) => {
	console.log("Health check API");
	let revision = "1.0";
	res.json({ msg: "Welcome to the API", version: revision });
});

app.post("/api/media-convert-status-update", (req, res) => {
	console.log("API - media-convert-status-update");
	const { id, status, uid } = req.body;
	console.log("---------------------------------------");
	console.log(id, status, uid);
	console.log("---------------------------------------");
	if (status === "PROGRESSING" || status === "COMPLETE") {

	}
});

app.use("/graphql", async (req, res) => {

	let schema = await buildSchema({
		resolvers: resolvers,
		validate: { enableDebugMessages: false }
	});

	try {

		let user = null;
		let rootValue = {
			user: user
		};

		//let cxt = new Context(prisma);

		await graphqlHTTP({
			schema: schema,
			rootValue: rootValue,
			graphiql: true,
			context: { prisma: prisma }
		})(req, res);

	} catch (e) {
		console.log("error", e);
		return res.status(400).json({
			data: { error: { graphQLErrors: ["AccessDenied!"], message: e } }
		});
	}
});

app.listen(PORT, () => {
	console.log("App is running on port %d in %s mode", PORT, app.get("env"));
	console.log("Press CTRL-C to stop\n");
});

export default app;
