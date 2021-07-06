import { Itinerary } from "../../../models/Itinerary";
import { Itinerary_items } from "../../../models/Itinerary_items";
import { ItineraryItinerary_itemsArgs } from "./args/ItineraryItinerary_itemsArgs";
export declare class ItineraryRelationsResolver {
    itinerary_items(itinerary: Itinerary, ctx: any, args: ItineraryItinerary_itemsArgs): Promise<Itinerary_items[]>;
}
