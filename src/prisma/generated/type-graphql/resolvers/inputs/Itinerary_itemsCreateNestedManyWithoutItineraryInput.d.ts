import { Itinerary_itemsCreateManyItineraryInputEnvelope } from "../inputs/Itinerary_itemsCreateManyItineraryInputEnvelope";
import { Itinerary_itemsCreateOrConnectWithoutItineraryInput } from "../inputs/Itinerary_itemsCreateOrConnectWithoutItineraryInput";
import { Itinerary_itemsCreateWithoutItineraryInput } from "../inputs/Itinerary_itemsCreateWithoutItineraryInput";
import { Itinerary_itemsWhereUniqueInput } from "../inputs/Itinerary_itemsWhereUniqueInput";
export declare class Itinerary_itemsCreateNestedManyWithoutItineraryInput {
    create?: Itinerary_itemsCreateWithoutItineraryInput[] | undefined;
    connectOrCreate?: Itinerary_itemsCreateOrConnectWithoutItineraryInput[] | undefined;
    createMany?: Itinerary_itemsCreateManyItineraryInputEnvelope | undefined;
    connect?: Itinerary_itemsWhereUniqueInput[] | undefined;
}
