import { VenuesOrderByInput } from "../../../inputs/VenuesOrderByInput";
import { VenuesWhereInput } from "../../../inputs/VenuesWhereInput";
import { VenuesWhereUniqueInput } from "../../../inputs/VenuesWhereUniqueInput";
export declare class VenueTypeVenuesArgs {
    where?: VenuesWhereInput | undefined;
    orderBy?: VenuesOrderByInput[] | undefined;
    cursor?: VenuesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "description" | "address" | "suburb" | "city" | "postCode" | "lat" | "lon" | "website" | "venue_type" | "breakfast" | "lunch" | "dinner" | "visible" | "created_by" | "updated_by" | "created_at" | "updated_at" | "test" | "cosy" | "romantic" | "weddings" | "post_code" | "bachelor_party" | "hen_party" | "outdoor_area" | "outdoor_dinning" | "outdoor_bar"> | undefined;
}
