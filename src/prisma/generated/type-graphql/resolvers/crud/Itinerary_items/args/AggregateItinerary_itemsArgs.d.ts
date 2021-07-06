import { Itinerary_itemsOrderByInput } from "../../../inputs/Itinerary_itemsOrderByInput";
import { Itinerary_itemsWhereInput } from "../../../inputs/Itinerary_itemsWhereInput";
import { Itinerary_itemsWhereUniqueInput } from "../../../inputs/Itinerary_itemsWhereUniqueInput";
export declare class AggregateItinerary_itemsArgs {
    where?: Itinerary_itemsWhereInput | undefined;
    orderBy?: Itinerary_itemsOrderByInput[] | undefined;
    cursor?: Itinerary_itemsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
