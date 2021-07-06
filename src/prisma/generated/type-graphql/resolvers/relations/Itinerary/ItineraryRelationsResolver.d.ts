import { Itinerary } from "../../../models/Itinerary";
import { Itinerary_places } from "../../../models/Itinerary_places";
import { ItineraryPlacesArgs } from "./args/ItineraryPlacesArgs";
export declare class ItineraryRelationsResolver {
    places(itinerary: Itinerary, ctx: any, args: ItineraryPlacesArgs): Promise<Itinerary_places[]>;
}
