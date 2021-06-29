import { VenueTypeOrderByInput } from "../../../inputs/VenueTypeOrderByInput";
import { VenueTypeWhereInput } from "../../../inputs/VenueTypeWhereInput";
import { VenueTypeWhereUniqueInput } from "../../../inputs/VenueTypeWhereUniqueInput";
export declare class FindManyVenueTypeArgs {
    where?: VenueTypeWhereInput | undefined;
    orderBy?: VenueTypeOrderByInput[] | undefined;
    cursor?: VenueTypeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_by" | "updated_by" | "created_at" | "updated_at" | "name"> | undefined;
}
