import { Itinerary_placesCreateOrConnectWithoutVenueInput } from "../inputs/Itinerary_placesCreateOrConnectWithoutVenueInput";
import { Itinerary_placesCreateWithoutVenueInput } from "../inputs/Itinerary_placesCreateWithoutVenueInput";
import { Itinerary_placesUpdateWithoutVenueInput } from "../inputs/Itinerary_placesUpdateWithoutVenueInput";
import { Itinerary_placesUpsertWithoutVenueInput } from "../inputs/Itinerary_placesUpsertWithoutVenueInput";
import { Itinerary_placesWhereUniqueInput } from "../inputs/Itinerary_placesWhereUniqueInput";
export declare class Itinerary_placesUpdateOneWithoutVenueInput {
    create?: Itinerary_placesCreateWithoutVenueInput | undefined;
    connectOrCreate?: Itinerary_placesCreateOrConnectWithoutVenueInput | undefined;
    upsert?: Itinerary_placesUpsertWithoutVenueInput | undefined;
    connect?: Itinerary_placesWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: Itinerary_placesUpdateWithoutVenueInput | undefined;
}
