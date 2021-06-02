"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const localPort = "3500";
exports.config = {
    connection: process.env.NODE_ENV === "production" ? "" : ""
};
//# sourceMappingURL=config.js.map