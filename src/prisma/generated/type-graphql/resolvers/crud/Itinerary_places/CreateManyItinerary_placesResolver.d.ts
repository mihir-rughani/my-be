import { GraphQLResolveInfo } from "graphql";
import { CreateManyItinerary_placesArgs } from "./args/CreateManyItinerary_placesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyItinerary_placesResolver {
    createManyItinerary_places(ctx: any, info: GraphQLResolveInfo, args: CreateManyItinerary_placesArgs): Promise<AffectedRowsOutput>;
}
