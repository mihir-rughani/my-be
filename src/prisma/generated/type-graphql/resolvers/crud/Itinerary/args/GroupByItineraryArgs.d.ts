import { ItineraryOrderByInput } from "../../../inputs/ItineraryOrderByInput";
import { ItineraryScalarWhereWithAggregatesInput } from "../../../inputs/ItineraryScalarWhereWithAggregatesInput";
import { ItineraryWhereInput } from "../../../inputs/ItineraryWhereInput";
export declare class GroupByItineraryArgs {
    where?: ItineraryWhereInput | undefined;
    orderBy?: ItineraryOrderByInput[] | undefined;
    by: Array<"id" | "user_id" | "published_at" | "created_by" | "updated_by" | "created_at" | "updated_at">;
    having?: ItineraryScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
