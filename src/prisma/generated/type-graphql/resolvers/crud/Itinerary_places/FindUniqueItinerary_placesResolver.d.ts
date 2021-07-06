import { GraphQLResolveInfo } from "graphql";
import { FindUniqueItinerary_placesArgs } from "./args/FindUniqueItinerary_placesArgs";
import { Itinerary_places } from "../../../models/Itinerary_places";
export declare class FindUniqueItinerary_placesResolver {
    findUniqueItinerary_places(ctx: any, info: GraphQLResolveInfo, args: FindUniqueItinerary_placesArgs): Promise<Itinerary_places | null>;
}
