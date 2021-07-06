import { Itinerary_itemsCreateManyItineraryInputEnvelope } from "../inputs/Itinerary_itemsCreateManyItineraryInputEnvelope";
import { Itinerary_itemsCreateOrConnectWithoutItineraryInput } from "../inputs/Itinerary_itemsCreateOrConnectWithoutItineraryInput";
import { Itinerary_itemsCreateWithoutItineraryInput } from "../inputs/Itinerary_itemsCreateWithoutItineraryInput";
import { Itinerary_itemsScalarWhereInput } from "../inputs/Itinerary_itemsScalarWhereInput";
import { Itinerary_itemsUpdateManyWithWhereWithoutItineraryInput } from "../inputs/Itinerary_itemsUpdateManyWithWhereWithoutItineraryInput";
import { Itinerary_itemsUpdateWithWhereUniqueWithoutItineraryInput } from "../inputs/Itinerary_itemsUpdateWithWhereUniqueWithoutItineraryInput";
import { Itinerary_itemsUpsertWithWhereUniqueWithoutItineraryInput } from "../inputs/Itinerary_itemsUpsertWithWhereUniqueWithoutItineraryInput";
import { Itinerary_itemsWhereUniqueInput } from "../inputs/Itinerary_itemsWhereUniqueInput";
export declare class Itinerary_itemsUpdateManyWithoutItineraryInput {
    create?: Itinerary_itemsCreateWithoutItineraryInput[] | undefined;
    connectOrCreate?: Itinerary_itemsCreateOrConnectWithoutItineraryInput[] | undefined;
    upsert?: Itinerary_itemsUpsertWithWhereUniqueWithoutItineraryInput[] | undefined;
    createMany?: Itinerary_itemsCreateManyItineraryInputEnvelope | undefined;
    connect?: Itinerary_itemsWhereUniqueInput[] | undefined;
    set?: Itinerary_itemsWhereUniqueInput[] | undefined;
    disconnect?: Itinerary_itemsWhereUniqueInput[] | undefined;
    delete?: Itinerary_itemsWhereUniqueInput[] | undefined;
    update?: Itinerary_itemsUpdateWithWhereUniqueWithoutItineraryInput[] | undefined;
    updateMany?: Itinerary_itemsUpdateManyWithWhereWithoutItineraryInput[] | undefined;
    deleteMany?: Itinerary_itemsScalarWhereInput[] | undefined;
}
