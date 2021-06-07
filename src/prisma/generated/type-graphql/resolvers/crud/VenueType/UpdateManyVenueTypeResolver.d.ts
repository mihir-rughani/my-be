import { GraphQLResolveInfo } from "graphql";
import { UpdateManyVenueTypeArgs } from "./args/UpdateManyVenueTypeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyVenueTypeResolver {
    updateManyVenueType(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVenueTypeArgs): Promise<AffectedRowsOutput>;
}
