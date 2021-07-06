import { Itinerary_placesOrderByInput } from "../../../inputs/Itinerary_placesOrderByInput";
import { Itinerary_placesScalarWhereWithAggregatesInput } from "../../../inputs/Itinerary_placesScalarWhereWithAggregatesInput";
import { Itinerary_placesWhereInput } from "../../../inputs/Itinerary_placesWhereInput";
export declare class GroupByItinerary_placesArgs {
    where?: Itinerary_placesWhereInput | undefined;
    orderBy?: Itinerary_placesOrderByInput[] | undefined;
    by: Array<"id" | "user_id" | "itinerary_id" | "venue_data" | "created_by" | "updated_by" | "created_at" | "updated_at">;
    having?: Itinerary_placesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
