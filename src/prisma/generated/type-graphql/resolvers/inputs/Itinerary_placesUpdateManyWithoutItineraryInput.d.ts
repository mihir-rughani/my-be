import { Itinerary_placesCreateManyItineraryInputEnvelope } from "../inputs/Itinerary_placesCreateManyItineraryInputEnvelope";
import { Itinerary_placesCreateOrConnectWithoutItineraryInput } from "../inputs/Itinerary_placesCreateOrConnectWithoutItineraryInput";
import { Itinerary_placesCreateWithoutItineraryInput } from "../inputs/Itinerary_placesCreateWithoutItineraryInput";
import { Itinerary_placesScalarWhereInput } from "../inputs/Itinerary_placesScalarWhereInput";
import { Itinerary_placesUpdateManyWithWhereWithoutItineraryInput } from "../inputs/Itinerary_placesUpdateManyWithWhereWithoutItineraryInput";
import { Itinerary_placesUpdateWithWhereUniqueWithoutItineraryInput } from "../inputs/Itinerary_placesUpdateWithWhereUniqueWithoutItineraryInput";
import { Itinerary_placesUpsertWithWhereUniqueWithoutItineraryInput } from "../inputs/Itinerary_placesUpsertWithWhereUniqueWithoutItineraryInput";
import { Itinerary_placesWhereUniqueInput } from "../inputs/Itinerary_placesWhereUniqueInput";
export declare class Itinerary_placesUpdateManyWithoutItineraryInput {
    create?: Itinerary_placesCreateWithoutItineraryInput[] | undefined;
    connectOrCreate?: Itinerary_placesCreateOrConnectWithoutItineraryInput[] | undefined;
    upsert?: Itinerary_placesUpsertWithWhereUniqueWithoutItineraryInput[] | undefined;
    createMany?: Itinerary_placesCreateManyItineraryInputEnvelope | undefined;
    connect?: Itinerary_placesWhereUniqueInput[] | undefined;
    set?: Itinerary_placesWhereUniqueInput[] | undefined;
    disconnect?: Itinerary_placesWhereUniqueInput[] | undefined;
    delete?: Itinerary_placesWhereUniqueInput[] | undefined;
    update?: Itinerary_placesUpdateWithWhereUniqueWithoutItineraryInput[] | undefined;
    updateMany?: Itinerary_placesUpdateManyWithWhereWithoutItineraryInput[] | undefined;
    deleteMany?: Itinerary_placesScalarWhereInput[] | undefined;
}
