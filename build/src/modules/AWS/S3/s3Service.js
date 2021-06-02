"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getS3SignedUrl = void 0;
const aws_1 = require("../config/aws");
const core_1 = require("../../../core");
const objectUtils_1 = require("../../../utils/objectUtils");
const s3 = new aws_1.default.S3();
const log = core_1.Logger("S3Service");
//FORMAT: operationName: [must have s3 params]
//e.g. putObject, must has s3Params with Bucket, Key(fileName) and ContentType defined, null/empty string is invalid
const OPERATION_VALIDATION_RULE = {
    putObject: ["Bucket", "Key", "ContentType"],
    getObject: ["Bucket", "Key"]
};
const DEFAULT_ACL = "bucket-owner-full-control";
const getS3SignedUrl = async (operation, s3Params) => {
    log.info(`S3Service to start ${operation} with config ${JSON.stringify(s3Params)}`);
    try {
        if (objectUtils_1.keysExits(OPERATION_VALIDATION_RULE[operation], s3Params)) {
            if (operation == "putObject" && !objectUtils_1.keysExits(["ACL"], s3Params)) {
                s3Params.ACL = DEFAULT_ACL;
            }
            // Making sure s3.getSignedUrl is called ASYNC
            // See: https://github.com/aws/aws-sdk-js/issues/1482
            const signedUrl = await new Promise((resolve, reject) => {
                s3.getSignedUrl(operation, s3Params, (err, data) => {
                    resolve(data);
                });
            });
            // log.info(
            //   `S3Service finished get signedURL ${signedUrl} for bucket params ${JSON.stringify(
            //     s3Params
            //   )}`
            // );
            return { signedUrl: signedUrl };
        }
        else {
            throw new Error(`Invalid S3Service/Params for ${operation}`);
        }
    }
    catch (err) {
        log.info(`S3Service getsignedurl throw error: ${err}`);
        throw new Error(err);
    }
};
exports.getS3SignedUrl = getS3SignedUrl;
//# sourceMappingURL=s3Service.js.map