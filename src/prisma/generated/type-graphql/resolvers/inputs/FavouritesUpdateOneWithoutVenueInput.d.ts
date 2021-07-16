import { FavouritesCreateOrConnectWithoutVenueInput } from "../inputs/FavouritesCreateOrConnectWithoutVenueInput";
import { FavouritesCreateWithoutVenueInput } from "../inputs/FavouritesCreateWithoutVenueInput";
import { FavouritesUpdateWithoutVenueInput } from "../inputs/FavouritesUpdateWithoutVenueInput";
import { FavouritesUpsertWithoutVenueInput } from "../inputs/FavouritesUpsertWithoutVenueInput";
import { FavouritesWhereUniqueInput } from "../inputs/FavouritesWhereUniqueInput";
export declare class FavouritesUpdateOneWithoutVenueInput {
    create?: FavouritesCreateWithoutVenueInput | undefined;
    connectOrCreate?: FavouritesCreateOrConnectWithoutVenueInput | undefined;
    upsert?: FavouritesUpsertWithoutVenueInput | undefined;
    connect?: FavouritesWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: FavouritesUpdateWithoutVenueInput | undefined;
}
