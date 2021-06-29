import { VenuesCreateManyVenueTypeInputEnvelope } from "../inputs/VenuesCreateManyVenueTypeInputEnvelope";
import { VenuesCreateOrConnectWithoutVenueTypeInput } from "../inputs/VenuesCreateOrConnectWithoutVenueTypeInput";
import { VenuesCreateWithoutVenueTypeInput } from "../inputs/VenuesCreateWithoutVenueTypeInput";
import { VenuesScalarWhereInput } from "../inputs/VenuesScalarWhereInput";
import { VenuesUpdateManyWithWhereWithoutVenueTypeInput } from "../inputs/VenuesUpdateManyWithWhereWithoutVenueTypeInput";
import { VenuesUpdateWithWhereUniqueWithoutVenueTypeInput } from "../inputs/VenuesUpdateWithWhereUniqueWithoutVenueTypeInput";
import { VenuesUpsertWithWhereUniqueWithoutVenueTypeInput } from "../inputs/VenuesUpsertWithWhereUniqueWithoutVenueTypeInput";
import { VenuesWhereUniqueInput } from "../inputs/VenuesWhereUniqueInput";
export declare class VenuesUpdateManyWithoutVenueTypeInput {
    create?: VenuesCreateWithoutVenueTypeInput[] | undefined;
    connectOrCreate?: VenuesCreateOrConnectWithoutVenueTypeInput[] | undefined;
    upsert?: VenuesUpsertWithWhereUniqueWithoutVenueTypeInput[] | undefined;
    createMany?: VenuesCreateManyVenueTypeInputEnvelope | undefined;
    connect?: VenuesWhereUniqueInput[] | undefined;
    set?: VenuesWhereUniqueInput[] | undefined;
    disconnect?: VenuesWhereUniqueInput[] | undefined;
    delete?: VenuesWhereUniqueInput[] | undefined;
    update?: VenuesUpdateWithWhereUniqueWithoutVenueTypeInput[] | undefined;
    updateMany?: VenuesUpdateManyWithWhereWithoutVenueTypeInput[] | undefined;
    deleteMany?: VenuesScalarWhereInput[] | undefined;
}
