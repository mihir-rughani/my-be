import { ItineraryCreateOrConnectWithoutItinerary_itemsInput } from "../inputs/ItineraryCreateOrConnectWithoutItinerary_itemsInput";
import { ItineraryCreateWithoutItinerary_itemsInput } from "../inputs/ItineraryCreateWithoutItinerary_itemsInput";
import { ItineraryUpdateWithoutItinerary_itemsInput } from "../inputs/ItineraryUpdateWithoutItinerary_itemsInput";
import { ItineraryUpsertWithoutItinerary_itemsInput } from "../inputs/ItineraryUpsertWithoutItinerary_itemsInput";
import { ItineraryWhereUniqueInput } from "../inputs/ItineraryWhereUniqueInput";
export declare class ItineraryUpdateOneWithoutItinerary_itemsInput {
    create?: ItineraryCreateWithoutItinerary_itemsInput | undefined;
    connectOrCreate?: ItineraryCreateOrConnectWithoutItinerary_itemsInput | undefined;
    upsert?: ItineraryUpsertWithoutItinerary_itemsInput | undefined;
    connect?: ItineraryWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: ItineraryUpdateWithoutItinerary_itemsInput | undefined;
}
