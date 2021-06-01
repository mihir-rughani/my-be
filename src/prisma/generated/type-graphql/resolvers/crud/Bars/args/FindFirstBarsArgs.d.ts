import { BarsOrderByInput } from "../../../inputs/BarsOrderByInput";
import { BarsWhereInput } from "../../../inputs/BarsWhereInput";
import { BarsWhereUniqueInput } from "../../../inputs/BarsWhereUniqueInput";
export declare class FindFirstBarsArgs {
    where?: BarsWhereInput | undefined;
    orderBy?: BarsOrderByInput[] | undefined;
    cursor?: BarsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "description" | "suburb" | "city" | "postCode" | "lat" | "lon" | "breakfast" | "lunch" | "dinner" | "bachelorParty" | "henParty" | "visible" | "published_at" | "created_by" | "updated_by" | "created_at" | "updated_at" | "bar_image"> | undefined;
}
