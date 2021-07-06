import { GraphQLResolveInfo } from "graphql";
import { UpdateManyItinerary_placesArgs } from "./args/UpdateManyItinerary_placesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyItinerary_placesResolver {
    updateManyItinerary_places(ctx: any, info: GraphQLResolveInfo, args: UpdateManyItinerary_placesArgs): Promise<AffectedRowsOutput>;
}
