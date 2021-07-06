import { GraphQLResolveInfo } from "graphql";
import { UpdateItineraryArgs } from "./args/UpdateItineraryArgs";
import { Itinerary } from "../../../models/Itinerary";
export declare class UpdateItineraryResolver {
    updateItinerary(ctx: any, info: GraphQLResolveInfo, args: UpdateItineraryArgs): Promise<Itinerary | null>;
}
