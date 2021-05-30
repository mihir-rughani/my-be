import { S3SignedUrlInputType } from "./s3Types";
import AWS from "../config/aws";
import { Logger } from "../../../core";
import { keysExits } from "../../../utils/objectUtils";

const s3 = new AWS.S3();
const log = Logger("S3Service");
//FORMAT: operationName: [must have s3 params]
//e.g. putObject, must has s3Params with Bucket, Key(fileName) and ContentType defined, null/empty string is invalid
const OPERATION_VALIDATION_RULE = {
  putObject: ["Bucket", "Key", "ContentType"],
  getObject: ["Bucket", "Key"]
};
const DEFAULT_ACL = "bucket-owner-full-control";

export const getS3SignedUrl = async (
  operation: string,
  s3Params: S3SignedUrlInputType
) => {
  log.info(
    `S3Service to start ${operation} with config ${JSON.stringify(s3Params)}`
  );
  try {
    if (keysExits(OPERATION_VALIDATION_RULE[operation], s3Params)) {
      if (operation == "putObject" && !keysExits(["ACL"], s3Params)) {
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
    } else {
      throw new Error(`Invalid S3Service/Params for ${operation}`);
    }
  } catch (err) {
    log.info(`S3Service getsignedurl throw error: ${err}`);
    throw new Error(err);
  }
};
