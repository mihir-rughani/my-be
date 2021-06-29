import { GraphQLResolveInfo } from "graphql";
import { UpdateManyVenuesArgs } from "./args/UpdateManyVenuesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyVenuesResolver {
    updateManyVenues(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVenuesArgs): Promise<AffectedRowsOutput>;
}
