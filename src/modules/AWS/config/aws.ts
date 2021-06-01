import * as AWS from "aws-sdk";
AWS.config.region = process.env.AWS_REGION || "ap-southeast-2";
AWS.config.accessKeyId =  process.env.AWS_ACCESS_KEY;
AWS.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
AWS.config.signatureVersion = "v4";

export default AWS;
