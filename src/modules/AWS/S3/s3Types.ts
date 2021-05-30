import { ObjectType, Field, InputType } from "type-graphql";

@ObjectType()
export class S3SignedUrl {
  @Field({ nullable: true }) signedUrl?: string;
}

@InputType()
export class S3SignedUrlInputType {
  @Field() Bucket: string;
  @Field() Key: string;
  @Field({ nullable: true }) Expires?: number;
  @Field({ nullable: true }) ContentType?: string;
  @Field({ nullable: true }) ACL?: string;
}
