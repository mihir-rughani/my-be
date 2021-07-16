import { VenuesCreateOrConnectWithoutFavouriteInput } from "../inputs/VenuesCreateOrConnectWithoutFavouriteInput";
import { VenuesCreateWithoutFavouriteInput } from "../inputs/VenuesCreateWithoutFavouriteInput";
import { VenuesUpdateWithoutFavouriteInput } from "../inputs/VenuesUpdateWithoutFavouriteInput";
import { VenuesUpsertWithoutFavouriteInput } from "../inputs/VenuesUpsertWithoutFavouriteInput";
import { VenuesWhereUniqueInput } from "../inputs/VenuesWhereUniqueInput";
export declare class VenuesUpdateOneWithoutFavouriteInput {
    create?: VenuesCreateWithoutFavouriteInput | undefined;
    connectOrCreate?: VenuesCreateOrConnectWithoutFavouriteInput | undefined;
    upsert?: VenuesUpsertWithoutFavouriteInput | undefined;
    connect?: VenuesWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: VenuesUpdateWithoutFavouriteInput | undefined;
}
