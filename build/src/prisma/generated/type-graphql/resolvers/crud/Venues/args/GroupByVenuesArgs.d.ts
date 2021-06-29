import { VenuesOrderByInput } from "../../../inputs/VenuesOrderByInput";
import { VenuesScalarWhereWithAggregatesInput } from "../../../inputs/VenuesScalarWhereWithAggregatesInput";
import { VenuesWhereInput } from "../../../inputs/VenuesWhereInput";
export declare class GroupByVenuesArgs {
    where?: VenuesWhereInput | undefined;
    orderBy?: VenuesOrderByInput[] | undefined;
    by: Array<"id" | "title" | "description" | "address" | "suburb" | "city" | "postCode" | "lat" | "lon" | "website" | "venue_type" | "breakfast" | "lunch" | "dinner" | "bachelorParty" | "henParty" | "visible" | "created_by" | "updated_by" | "created_at" | "updated_at">;
    having?: VenuesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
