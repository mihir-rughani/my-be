import { GraphQLResolveInfo } from "graphql";
import { CreateManyVenuesArgs } from "./args/CreateManyVenuesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyVenuesResolver {
    createManyVenues(ctx: any, info: GraphQLResolveInfo, args: CreateManyVenuesArgs): Promise<AffectedRowsOutput>;
}
