import * as AWS from "aws-sdk";
AWS.config.region = process.env.AWS_REGION || "ap-southeast-2";
AWS.config.accessKeyId =  "AKIAT6GVT5IBXKMODFWC" || process.env.AWS_ACCESS_KEY;
AWS.config.secretAccessKey = "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" || process.env.AWS_SECRET_ACCESS_KEY;
AWS.config.signatureVersion = "v4";

export default AWS;
