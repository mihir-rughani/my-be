import { Arg, Authorized, Query, Resolver } from "type-graphql";
import { Logger } from "../../../core";
import { RolesEnum } from "../../../types/enums";
import { S3SignedUrl, S3SignedUrlInputType } from "./s3Types";
import { getS3SignedUrl } from "./s3Service";
import { IResponseError } from "../../../types/interfaces";

const log = Logger("S3Resolver");

@Resolver()
export class S3Resolver {
	@Authorized(RolesEnum.Admin, RolesEnum.User, RolesEnum.AnonymousAuth)
	@Query(returns => S3SignedUrl, { nullable: true })
	async s3SignedUrl(
		@Arg("operation") operation: string,
		@Arg("s3Params") s3Params: S3SignedUrlInputType
	): Promise<{ signedUrl: any } | IResponseError> {
		log.info("=== START OF S3Resolver ===");
		return await getS3SignedUrl(operation, s3Params);
	}

	@Authorized(RolesEnum.Admin, RolesEnum.User, RolesEnum.AnonymousAuth)
	@Query(returns => S3SignedUrl, { nullable: true })
	async sign(
		@Arg("operation") operation: string,
		@Arg("s3Params") s3Params: S3SignedUrlInputType
	) {
		log.info("=== START OF S3Resolver ===");
		return await getS3SignedUrl(operation, s3Params);
	}
}
