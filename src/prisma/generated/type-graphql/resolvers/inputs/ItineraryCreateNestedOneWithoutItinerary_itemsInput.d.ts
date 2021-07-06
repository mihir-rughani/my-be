import { ItineraryCreateOrConnectWithoutItinerary_itemsInput } from "../inputs/ItineraryCreateOrConnectWithoutItinerary_itemsInput";
import { ItineraryCreateWithoutItinerary_itemsInput } from "../inputs/ItineraryCreateWithoutItinerary_itemsInput";
import { ItineraryWhereUniqueInput } from "../inputs/ItineraryWhereUniqueInput";
export declare class ItineraryCreateNestedOneWithoutItinerary_itemsInput {
    create?: ItineraryCreateWithoutItinerary_itemsInput | undefined;
    connectOrCreate?: ItineraryCreateOrConnectWithoutItinerary_itemsInput | undefined;
    connect?: ItineraryWhereUniqueInput | undefined;
}
