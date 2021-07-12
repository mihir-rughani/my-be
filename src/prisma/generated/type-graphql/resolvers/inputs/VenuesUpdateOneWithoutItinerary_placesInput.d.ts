import { VenuesCreateOrConnectWithoutItinerary_placesInput } from "../inputs/VenuesCreateOrConnectWithoutItinerary_placesInput";
import { VenuesCreateWithoutItinerary_placesInput } from "../inputs/VenuesCreateWithoutItinerary_placesInput";
import { VenuesUpdateWithoutItinerary_placesInput } from "../inputs/VenuesUpdateWithoutItinerary_placesInput";
import { VenuesUpsertWithoutItinerary_placesInput } from "../inputs/VenuesUpsertWithoutItinerary_placesInput";
import { VenuesWhereUniqueInput } from "../inputs/VenuesWhereUniqueInput";
export declare class VenuesUpdateOneWithoutItinerary_placesInput {
    create?: VenuesCreateWithoutItinerary_placesInput | undefined;
    connectOrCreate?: VenuesCreateOrConnectWithoutItinerary_placesInput | undefined;
    upsert?: VenuesUpsertWithoutItinerary_placesInput | undefined;
    connect?: VenuesWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: VenuesUpdateWithoutItinerary_placesInput | undefined;
}
