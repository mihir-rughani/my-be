import { ItineraryOrderByInput } from "../../../inputs/ItineraryOrderByInput";
import { ItineraryWhereInput } from "../../../inputs/ItineraryWhereInput";
import { ItineraryWhereUniqueInput } from "../../../inputs/ItineraryWhereUniqueInput";
export declare class FindManyItineraryArgs {
    where?: ItineraryWhereInput | undefined;
    orderBy?: ItineraryOrderByInput[] | undefined;
    cursor?: ItineraryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "user_id" | "itinerary_date" | "created_by" | "updated_by" | "created_at" | "updated_at"> | undefined;
}
