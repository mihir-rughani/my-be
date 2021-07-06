import { ItineraryOrderByInput } from "../../../inputs/ItineraryOrderByInput";
import { ItineraryWhereInput } from "../../../inputs/ItineraryWhereInput";
import { ItineraryWhereUniqueInput } from "../../../inputs/ItineraryWhereUniqueInput";
export declare class AggregateItineraryArgs {
    where?: ItineraryWhereInput | undefined;
    orderBy?: ItineraryOrderByInput[] | undefined;
    cursor?: ItineraryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
