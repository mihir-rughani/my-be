import { GraphQLResolveInfo } from "graphql";
import { UpdateManyItineraryArgs } from "./args/UpdateManyItineraryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyItineraryResolver {
    updateManyItinerary(ctx: any, info: GraphQLResolveInfo, args: UpdateManyItineraryArgs): Promise<AffectedRowsOutput>;
}
