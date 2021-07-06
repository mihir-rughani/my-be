import { Itinerary_placesOrderByInput } from "../../../inputs/Itinerary_placesOrderByInput";
import { Itinerary_placesWhereInput } from "../../../inputs/Itinerary_placesWhereInput";
import { Itinerary_placesWhereUniqueInput } from "../../../inputs/Itinerary_placesWhereUniqueInput";
export declare class FindManyItinerary_placesArgs {
    where?: Itinerary_placesWhereInput | undefined;
    orderBy?: Itinerary_placesOrderByInput[] | undefined;
    cursor?: Itinerary_placesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "user_id" | "itinerary_id" | "venue_data" | "created_by" | "updated_by" | "created_at" | "updated_at"> | undefined;
}
