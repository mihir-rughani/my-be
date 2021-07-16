import { Favourites } from "../../../models/Favourites";
import { Itinerary_places } from "../../../models/Itinerary_places";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
import { VenueType } from "../../../models/VenueType";
import { Venues } from "../../../models/Venues";
import { VenuesUploadFileMorphArgs } from "./args/VenuesUploadFileMorphArgs";
export declare class VenuesRelationsResolver {
    venueType(venues: Venues, ctx: any): Promise<VenueType | null>;
    uploadFileMorph(venues: Venues, ctx: any, args: VenuesUploadFileMorphArgs): Promise<Upload_file_morph[]>;
    favourite(venues: Venues, ctx: any): Promise<Favourites | null>;
    itinerary_places(venues: Venues, ctx: any): Promise<Itinerary_places | null>;
}
