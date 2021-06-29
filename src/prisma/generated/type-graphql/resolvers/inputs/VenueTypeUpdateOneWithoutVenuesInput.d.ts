import { VenueTypeCreateOrConnectWithoutVenuesInput } from "../inputs/VenueTypeCreateOrConnectWithoutVenuesInput";
import { VenueTypeCreateWithoutVenuesInput } from "../inputs/VenueTypeCreateWithoutVenuesInput";
import { VenueTypeUpdateWithoutVenuesInput } from "../inputs/VenueTypeUpdateWithoutVenuesInput";
import { VenueTypeUpsertWithoutVenuesInput } from "../inputs/VenueTypeUpsertWithoutVenuesInput";
import { VenueTypeWhereUniqueInput } from "../inputs/VenueTypeWhereUniqueInput";
export declare class VenueTypeUpdateOneWithoutVenuesInput {
    create?: VenueTypeCreateWithoutVenuesInput | undefined;
    connectOrCreate?: VenueTypeCreateOrConnectWithoutVenuesInput | undefined;
    upsert?: VenueTypeUpsertWithoutVenuesInput | undefined;
    connect?: VenueTypeWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: VenueTypeUpdateWithoutVenuesInput | undefined;
}
