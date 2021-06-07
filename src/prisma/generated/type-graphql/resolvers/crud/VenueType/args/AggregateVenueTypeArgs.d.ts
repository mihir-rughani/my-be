import { VenueTypeOrderByInput } from "../../../inputs/VenueTypeOrderByInput";
import { VenueTypeWhereInput } from "../../../inputs/VenueTypeWhereInput";
import { VenueTypeWhereUniqueInput } from "../../../inputs/VenueTypeWhereUniqueInput";
export declare class AggregateVenueTypeArgs {
    where?: VenueTypeWhereInput | undefined;
    orderBy?: VenueTypeOrderByInput[] | undefined;
    cursor?: VenueTypeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
