import { VenueType } from "../../../models/VenueType";
import { Venues } from "../../../models/Venues";
import { VenueTypeVenuesArgs } from "./args/VenueTypeVenuesArgs";
export declare class VenueTypeRelationsResolver {
    venues(venueType: VenueType, ctx: any, args: VenueTypeVenuesArgs): Promise<Venues[]>;
}
