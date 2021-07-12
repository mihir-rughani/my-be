import { Itinerary_placesCreateOrConnectWithoutVenueInput } from "../inputs/Itinerary_placesCreateOrConnectWithoutVenueInput";
import { Itinerary_placesCreateWithoutVenueInput } from "../inputs/Itinerary_placesCreateWithoutVenueInput";
import { Itinerary_placesWhereUniqueInput } from "../inputs/Itinerary_placesWhereUniqueInput";
export declare class Itinerary_placesCreateNestedOneWithoutVenueInput {
    create?: Itinerary_placesCreateWithoutVenueInput | undefined;
    connectOrCreate?: Itinerary_placesCreateOrConnectWithoutVenueInput | undefined;
    connect?: Itinerary_placesWhereUniqueInput | undefined;
}
