import { VenuesCreateOrConnectWithoutItinerary_placesInput } from "../inputs/VenuesCreateOrConnectWithoutItinerary_placesInput";
import { VenuesCreateWithoutItinerary_placesInput } from "../inputs/VenuesCreateWithoutItinerary_placesInput";
import { VenuesWhereUniqueInput } from "../inputs/VenuesWhereUniqueInput";
export declare class VenuesCreateNestedOneWithoutItinerary_placesInput {
    create?: VenuesCreateWithoutItinerary_placesInput | undefined;
    connectOrCreate?: VenuesCreateOrConnectWithoutItinerary_placesInput | undefined;
    connect?: VenuesWhereUniqueInput | undefined;
}
