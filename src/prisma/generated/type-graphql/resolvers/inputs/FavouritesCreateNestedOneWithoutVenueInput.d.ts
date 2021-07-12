import { FavouritesCreateOrConnectWithoutVenueInput } from "../inputs/FavouritesCreateOrConnectWithoutVenueInput";
import { FavouritesCreateWithoutVenueInput } from "../inputs/FavouritesCreateWithoutVenueInput";
import { FavouritesWhereUniqueInput } from "../inputs/FavouritesWhereUniqueInput";
export declare class FavouritesCreateNestedOneWithoutVenueInput {
    create?: FavouritesCreateWithoutVenueInput | undefined;
    connectOrCreate?: FavouritesCreateOrConnectWithoutVenueInput | undefined;
    connect?: FavouritesWhereUniqueInput | undefined;
}
