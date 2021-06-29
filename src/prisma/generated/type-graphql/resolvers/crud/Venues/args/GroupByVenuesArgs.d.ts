import { VenuesOrderByInput } from "../../../inputs/VenuesOrderByInput";
import { VenuesScalarWhereWithAggregatesInput } from "../../../inputs/VenuesScalarWhereWithAggregatesInput";
import { VenuesWhereInput } from "../../../inputs/VenuesWhereInput";
export declare class GroupByVenuesArgs {
    where?: VenuesWhereInput | undefined;
    orderBy?: VenuesOrderByInput[] | undefined;
    by: Array<"id" | "title" | "description" | "address" | "suburb" | "city" | "postCode" | "lat" | "lon" | "website" | "venue_type" | "breakfast" | "lunch" | "dinner" | "visible" | "created_by" | "updated_by" | "created_at" | "updated_at" | "test" | "cosy" | "romantic" | "weddings" | "post_code" | "bachelor_party" | "hen_party" | "outdoor_area" | "outdoor_dinning" | "outdoor_bar">;
    having?: VenuesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
