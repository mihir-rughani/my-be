import { GraphQLResolveInfo } from "graphql";
import { DeleteManyItinerary_placesArgs } from "./args/DeleteManyItinerary_placesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyItinerary_placesResolver {
    deleteManyItinerary_places(ctx: any, info: GraphQLResolveInfo, args: DeleteManyItinerary_placesArgs): Promise<AffectedRowsOutput>;
}
