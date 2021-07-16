import { FavouritesOrderByInput } from "../../../inputs/FavouritesOrderByInput";
import { FavouritesWhereInput } from "../../../inputs/FavouritesWhereInput";
import { FavouritesWhereUniqueInput } from "../../../inputs/FavouritesWhereUniqueInput";
export declare class AggregateFavouritesArgs {
    where?: FavouritesWhereInput | undefined;
    orderBy?: FavouritesOrderByInput[] | undefined;
    cursor?: FavouritesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
