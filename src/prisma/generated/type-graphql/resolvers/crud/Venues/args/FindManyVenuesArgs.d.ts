import { VenuesOrderByInput } from "../../../inputs/VenuesOrderByInput";
import { VenuesWhereInput } from "../../../inputs/VenuesWhereInput";
import { VenuesWhereUniqueInput } from "../../../inputs/VenuesWhereUniqueInput";
export declare class FindManyVenuesArgs {
    where?: VenuesWhereInput | undefined;
    orderBy?: VenuesOrderByInput[] | undefined;
    cursor?: VenuesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "description" | "suburb" | "city" | "postCode" | "lat" | "lon" | "breakfast" | "lunch" | "dinner" | "bachelorParty" | "henParty" | "visible" | "published_at" | "created_by" | "updated_by" | "created_at" | "updated_at" | "venue_type"> | undefined;
}
