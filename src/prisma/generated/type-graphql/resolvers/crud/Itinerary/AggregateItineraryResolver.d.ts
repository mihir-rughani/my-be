import { GraphQLResolveInfo } from "graphql";
import { AggregateItineraryArgs } from "./args/AggregateItineraryArgs";
import { AggregateItinerary } from "../../outputs/AggregateItinerary";
export declare class AggregateItineraryResolver {
    aggregateItinerary(ctx: any, info: GraphQLResolveInfo, args: AggregateItineraryArgs): Promise<AggregateItinerary>;
}
