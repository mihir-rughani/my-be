import { GraphQLResolveInfo } from "graphql";
import { FindFirstItineraryArgs } from "./args/FindFirstItineraryArgs";
import { Itinerary } from "../../../models/Itinerary";
export declare class FindFirstItineraryResolver {
    findFirstItinerary(ctx: any, info: GraphQLResolveInfo, args: FindFirstItineraryArgs): Promise<Itinerary | null>;
}
