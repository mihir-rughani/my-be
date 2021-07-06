import { GraphQLResolveInfo } from "graphql";
import { UpsertItineraryArgs } from "./args/UpsertItineraryArgs";
import { Itinerary } from "../../../models/Itinerary";
export declare class UpsertItineraryResolver {
    upsertItinerary(ctx: any, info: GraphQLResolveInfo, args: UpsertItineraryArgs): Promise<Itinerary>;
}
