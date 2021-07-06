import { ItineraryOrderByInput } from "../../../inputs/ItineraryOrderByInput";
import { ItineraryWhereInput } from "../../../inputs/ItineraryWhereInput";
import { ItineraryWhereUniqueInput } from "../../../inputs/ItineraryWhereUniqueInput";
export declare class FindFirstItineraryArgs {
    where?: ItineraryWhereInput | undefined;
    orderBy?: ItineraryOrderByInput[] | undefined;
    cursor?: ItineraryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "user_id" | "published_at" | "created_by" | "updated_by" | "created_at" | "updated_at"> | undefined;
}
