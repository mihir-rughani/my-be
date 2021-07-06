import { Itinerary_placesCreateManyItineraryInputEnvelope } from "../inputs/Itinerary_placesCreateManyItineraryInputEnvelope";
import { Itinerary_placesCreateOrConnectWithoutItineraryInput } from "../inputs/Itinerary_placesCreateOrConnectWithoutItineraryInput";
import { Itinerary_placesCreateWithoutItineraryInput } from "../inputs/Itinerary_placesCreateWithoutItineraryInput";
import { Itinerary_placesWhereUniqueInput } from "../inputs/Itinerary_placesWhereUniqueInput";
export declare class Itinerary_placesCreateNestedManyWithoutItineraryInput {
    create?: Itinerary_placesCreateWithoutItineraryInput[] | undefined;
    connectOrCreate?: Itinerary_placesCreateOrConnectWithoutItineraryInput[] | undefined;
    createMany?: Itinerary_placesCreateManyItineraryInputEnvelope | undefined;
    connect?: Itinerary_placesWhereUniqueInput[] | undefined;
}
