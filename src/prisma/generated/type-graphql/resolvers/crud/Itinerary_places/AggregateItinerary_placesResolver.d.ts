import { GraphQLResolveInfo } from "graphql";
import { AggregateItinerary_placesArgs } from "./args/AggregateItinerary_placesArgs";
import { AggregateItinerary_places } from "../../outputs/AggregateItinerary_places";
export declare class AggregateItinerary_placesResolver {
    aggregateItinerary_places(ctx: any, info: GraphQLResolveInfo, args: AggregateItinerary_placesArgs): Promise<AggregateItinerary_places>;
}
