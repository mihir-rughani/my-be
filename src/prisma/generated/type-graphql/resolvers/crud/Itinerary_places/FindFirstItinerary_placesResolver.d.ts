import { GraphQLResolveInfo } from "graphql";
import { FindFirstItinerary_placesArgs } from "./args/FindFirstItinerary_placesArgs";
import { Itinerary_places } from "../../../models/Itinerary_places";
export declare class FindFirstItinerary_placesResolver {
    findFirstItinerary_places(ctx: any, info: GraphQLResolveInfo, args: FindFirstItinerary_placesArgs): Promise<Itinerary_places | null>;
}
