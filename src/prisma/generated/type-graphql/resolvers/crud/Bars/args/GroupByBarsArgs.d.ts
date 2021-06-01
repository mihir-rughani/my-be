import { BarsOrderByInput } from "../../../inputs/BarsOrderByInput";
import { BarsScalarWhereWithAggregatesInput } from "../../../inputs/BarsScalarWhereWithAggregatesInput";
import { BarsWhereInput } from "../../../inputs/BarsWhereInput";
export declare class GroupByBarsArgs {
    where?: BarsWhereInput | undefined;
    orderBy?: BarsOrderByInput[] | undefined;
    by: Array<"id" | "title" | "description" | "suburb" | "city" | "postCode" | "lat" | "lon" | "breakfast" | "lunch" | "dinner" | "bachelorParty" | "henParty" | "visible" | "published_at" | "created_by" | "updated_by" | "created_at" | "updated_at" | "bar_image">;
    having?: BarsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
