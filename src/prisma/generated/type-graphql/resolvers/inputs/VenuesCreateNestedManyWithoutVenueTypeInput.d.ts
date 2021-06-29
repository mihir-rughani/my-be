import { VenuesCreateManyVenueTypeInputEnvelope } from "../inputs/VenuesCreateManyVenueTypeInputEnvelope";
import { VenuesCreateOrConnectWithoutVenueTypeInput } from "../inputs/VenuesCreateOrConnectWithoutVenueTypeInput";
import { VenuesCreateWithoutVenueTypeInput } from "../inputs/VenuesCreateWithoutVenueTypeInput";
import { VenuesWhereUniqueInput } from "../inputs/VenuesWhereUniqueInput";
export declare class VenuesCreateNestedManyWithoutVenueTypeInput {
    create?: VenuesCreateWithoutVenueTypeInput[] | undefined;
    connectOrCreate?: VenuesCreateOrConnectWithoutVenueTypeInput[] | undefined;
    createMany?: VenuesCreateManyVenueTypeInputEnvelope | undefined;
    connect?: VenuesWhereUniqueInput[] | undefined;
}
