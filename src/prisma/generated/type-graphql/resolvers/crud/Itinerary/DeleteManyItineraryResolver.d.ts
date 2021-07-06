import { GraphQLResolveInfo } from "graphql";
import { DeleteManyItineraryArgs } from "./args/DeleteManyItineraryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyItineraryResolver {
    deleteManyItinerary(ctx: any, info: GraphQLResolveInfo, args: DeleteManyItineraryArgs): Promise<AffectedRowsOutput>;
}
