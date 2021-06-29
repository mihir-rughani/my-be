import { VenueTypeCreateOrConnectWithoutVenuesInput } from "../inputs/VenueTypeCreateOrConnectWithoutVenuesInput";
import { VenueTypeCreateWithoutVenuesInput } from "../inputs/VenueTypeCreateWithoutVenuesInput";
import { VenueTypeWhereUniqueInput } from "../inputs/VenueTypeWhereUniqueInput";
export declare class VenueTypeCreateNestedOneWithoutVenuesInput {
    create?: VenueTypeCreateWithoutVenuesInput | undefined;
    connectOrCreate?: VenueTypeCreateOrConnectWithoutVenuesInput | undefined;
    connect?: VenueTypeWhereUniqueInput | undefined;
}
