import { VenuesOrderByInput } from "../../../inputs/VenuesOrderByInput";
import { VenuesScalarWhereWithAggregatesInput } from "../../../inputs/VenuesScalarWhereWithAggregatesInput";
import { VenuesWhereInput } from "../../../inputs/VenuesWhereInput";
export declare class GroupByVenuesArgs {
    where?: VenuesWhereInput | undefined;
    orderBy?: VenuesOrderByInput[] | undefined;
    by: Array<"id" | "title" | "description" | "suburb" | "city" | "postCode" | "lat" | "lon" | "breakfast" | "lunch" | "dinner" | "bachelorParty" | "henParty" | "visible" | "published_at" | "created_by" | "updated_by" | "created_at" | "updated_at" | "venue_type">;
    having?: VenuesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
