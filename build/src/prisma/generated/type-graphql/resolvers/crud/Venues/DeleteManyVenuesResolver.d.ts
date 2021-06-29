import { GraphQLResolveInfo } from "graphql";
import { DeleteManyVenuesArgs } from "./args/DeleteManyVenuesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyVenuesResolver {
    deleteManyVenues(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVenuesArgs): Promise<AffectedRowsOutput>;
}
