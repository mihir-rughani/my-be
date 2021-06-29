import { VenuesOrderByInput } from "../../../inputs/VenuesOrderByInput";
import { VenuesWhereInput } from "../../../inputs/VenuesWhereInput";
import { VenuesWhereUniqueInput } from "../../../inputs/VenuesWhereUniqueInput";
export declare class FindFirstVenuesArgs {
    where?: VenuesWhereInput | undefined;
    orderBy?: VenuesOrderByInput[] | undefined;
    cursor?: VenuesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "description" | "address" | "suburb" | "city" | "postCode" | "lat" | "lon" | "website" | "venue_type" | "breakfast" | "lunch" | "dinner" | "bachelorParty" | "henParty" | "visible" | "created_by" | "updated_by" | "created_at" | "updated_at"> | undefined;
}
