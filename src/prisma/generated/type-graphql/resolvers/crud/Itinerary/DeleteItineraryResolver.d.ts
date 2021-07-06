import { GraphQLResolveInfo } from "graphql";
import { DeleteItineraryArgs } from "./args/DeleteItineraryArgs";
import { Itinerary } from "../../../models/Itinerary";
export declare class DeleteItineraryResolver {
    deleteItinerary(ctx: any, info: GraphQLResolveInfo, args: DeleteItineraryArgs): Promise<Itinerary | null>;
}
