import { GraphQLResolveInfo } from "graphql";
import { FindManyItinerary_placesArgs } from "./args/FindManyItinerary_placesArgs";
import { Itinerary_places } from "../../../models/Itinerary_places";
export declare class FindManyItinerary_placesResolver {
    findManyItinerary_places(ctx: any, info: GraphQLResolveInfo, args: FindManyItinerary_placesArgs): Promise<Itinerary_places[]>;
}
