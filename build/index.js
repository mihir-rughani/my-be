"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express = require("express");
const bodyParser = require("body-parser");
const type_graphql_1 = require("type-graphql");
const express_graphql_1 = require("express-graphql");
const dotenv = require("dotenv");
const type_graphql_2 = require("./src/prisma/generated/type-graphql");
const client_1 = require("@prisma/client");
const PORT = process.env.PORT || 3500;
const prisma = new client_1.PrismaClient();
class Context {
    constructor(prisma) {
        this.prisma = prisma;
    }
}
dotenv.config();
// (async () => {
// 	await dbConnect();
// })()
const app = express();
app.set("port", process.env.PORT || 3500);
app.use(bodyParser.json({
    type: ["json", "application/csp-report"]
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Anonymous, Uid");
    if ("OPTIONS" === req.method) {
        res.sendStatus(200);
    }
    else {
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
    let schema = await type_graphql_1.buildSchema({
        resolvers: type_graphql_2.resolvers,
        validate: { enableDebugMessages: false }
    });
    try {
        let user = null;
        let rootValue = {
            user: user
        };
        //let cxt = new Context(prisma);
        await express_graphql_1.graphqlHTTP({
            schema: schema,
            rootValue: rootValue,
            graphiql: true,
            context: { prisma: prisma }
        })(req, res);
    }
    catch (e) {
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
exports.default = app;
//# sourceMappingURL=index.js.map