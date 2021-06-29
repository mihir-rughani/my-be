import { VenuesOrderByInput } from "../../../inputs/VenuesOrderByInput";
import { VenuesWhereInput } from "../../../inputs/VenuesWhereInput";
import { VenuesWhereUniqueInput } from "../../../inputs/VenuesWhereUniqueInput";
export declare class AggregateVenuesArgs {
    where?: VenuesWhereInput | undefined;
    orderBy?: VenuesOrderByInput[] | undefined;
    cursor?: VenuesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
