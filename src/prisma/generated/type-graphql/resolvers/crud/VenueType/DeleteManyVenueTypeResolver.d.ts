import { GraphQLResolveInfo } from "graphql";
import { DeleteManyVenueTypeArgs } from "./args/DeleteManyVenueTypeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyVenueTypeResolver {
    deleteManyVenueType(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVenueTypeArgs): Promise<AffectedRowsOutput>;
}
