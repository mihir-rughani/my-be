import { Itinerary_itemsOrderByInput } from "../../../inputs/Itinerary_itemsOrderByInput";
import { Itinerary_itemsScalarWhereWithAggregatesInput } from "../../../inputs/Itinerary_itemsScalarWhereWithAggregatesInput";
import { Itinerary_itemsWhereInput } from "../../../inputs/Itinerary_itemsWhereInput";
export declare class GroupByItinerary_itemsArgs {
    where?: Itinerary_itemsWhereInput | undefined;
    orderBy?: Itinerary_itemsOrderByInput[] | undefined;
    by: Array<"id" | "itinerary_id" | "user_id" | "published_at" | "created_by" | "updated_by" | "created_at" | "updated_at" | "venue_data">;
    having?: Itinerary_itemsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
