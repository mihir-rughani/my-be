import { GraphQLResolveInfo } from "graphql";
import { UpsertItinerary_placesArgs } from "./args/UpsertItinerary_placesArgs";
import { Itinerary_places } from "../../../models/Itinerary_places";
export declare class UpsertItinerary_placesResolver {
    upsertItinerary_places(ctx: any, info: GraphQLResolveInfo, args: UpsertItinerary_placesArgs): Promise<Itinerary_places>;
}
