import { GraphQLResolveInfo } from "graphql";
import { FindManyItineraryArgs } from "./args/FindManyItineraryArgs";
import { Itinerary } from "../../../models/Itinerary";
export declare class FindManyItineraryResolver {
    itineraries(ctx: any, info: GraphQLResolveInfo, args: FindManyItineraryArgs): Promise<Itinerary[]>;
}
