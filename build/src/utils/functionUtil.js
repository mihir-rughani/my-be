"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCreateUpdateTimestamp = void 0;
const moment = require("moment");
function getCreateUpdateTimestamp() {
    const currentTime = moment().format(`DD MMM YYYY:HH:mm:ss`);
    const timeStamp = moment().unix();
    return {
        dateCreated: currentTime,
        dateUpdated: currentTime,
        timeStamp: timeStamp
    };
}
exports.getCreateUpdateTimestamp = getCreateUpdateTimestamp;
//# sourceMappingURL=functionUtil.js.map