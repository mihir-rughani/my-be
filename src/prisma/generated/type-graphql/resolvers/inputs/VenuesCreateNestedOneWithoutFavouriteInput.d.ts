import { VenuesCreateOrConnectWithoutFavouriteInput } from "../inputs/VenuesCreateOrConnectWithoutFavouriteInput";
import { VenuesCreateWithoutFavouriteInput } from "../inputs/VenuesCreateWithoutFavouriteInput";
import { VenuesWhereUniqueInput } from "../inputs/VenuesWhereUniqueInput";
export declare class VenuesCreateNestedOneWithoutFavouriteInput {
    create?: VenuesCreateWithoutFavouriteInput | undefined;
    connectOrCreate?: VenuesCreateOrConnectWithoutFavouriteInput | undefined;
    connect?: VenuesWhereUniqueInput | undefined;
}
