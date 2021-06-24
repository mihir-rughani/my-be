import { GraphQLResolveInfo } from "graphql";
import { CreateManyVenueTypeArgs } from "./args/CreateManyVenueTypeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyVenueTypeResolver {
    createManyVenueType(ctx: any, info: GraphQLResolveInfo, args: CreateManyVenueTypeArgs): Promise<AffectedRowsOutput>;
}
