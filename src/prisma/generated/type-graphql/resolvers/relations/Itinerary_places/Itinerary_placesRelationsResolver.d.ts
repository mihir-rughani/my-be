import { Itinerary } from "../../../models/Itinerary";
import { Itinerary_places } from "../../../models/Itinerary_places";
import { Venues } from "../../../models/Venues";
export declare class Itinerary_placesRelationsResolver {
    venue(itinerary_places: Itinerary_places, ctx: any): Promise<Venues | null>;
    itinerary(itinerary_places: Itinerary_places, ctx: any): Promise<Itinerary | null>;
}
