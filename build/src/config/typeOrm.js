"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const typeorm_1 = require("typeorm");
const dbConnect = async () => {
    return await typeorm_1.createConnection({
        type: "postgres",
        schema: "public",
        host: "localhost",
        port: 5432,
        username: "mihirrughani",
        password: "",
        database: "MaseSays",
        synchronize: false,
        logging: false
    });
};
exports.dbConnect = dbConnect;
//# sourceMappingURL=typeOrm.js.map