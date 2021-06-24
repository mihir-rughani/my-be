import { VenueTypeOrderByInput } from "../../../inputs/VenueTypeOrderByInput";
import { VenueTypeScalarWhereWithAggregatesInput } from "../../../inputs/VenueTypeScalarWhereWithAggregatesInput";
import { VenueTypeWhereInput } from "../../../inputs/VenueTypeWhereInput";
export declare class GroupByVenueTypeArgs {
    where?: VenueTypeWhereInput | undefined;
    orderBy?: VenueTypeOrderByInput[] | undefined;
    by: Array<"id" | "created_by" | "updated_by" | "created_at" | "updated_at" | "name">;
    having?: VenueTypeScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
