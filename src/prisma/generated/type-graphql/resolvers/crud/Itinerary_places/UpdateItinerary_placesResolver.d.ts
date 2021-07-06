import { GraphQLResolveInfo } from "graphql";
import { UpdateItinerary_placesArgs } from "./args/UpdateItinerary_placesArgs";
import { Itinerary_places } from "../../../models/Itinerary_places";
export declare class UpdateItinerary_placesResolver {
    updateItinerary_places(ctx: any, info: GraphQLResolveInfo, args: UpdateItinerary_placesArgs): Promise<Itinerary_places | null>;
}
