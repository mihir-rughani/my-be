import { FavouritesOrderByInput } from "../../../inputs/FavouritesOrderByInput";
import { FavouritesWhereInput } from "../../../inputs/FavouritesWhereInput";
import { FavouritesWhereUniqueInput } from "../../../inputs/FavouritesWhereUniqueInput";
export declare class FindFirstFavouritesArgs {
    where?: FavouritesWhereInput | undefined;
    orderBy?: FavouritesOrderByInput[] | undefined;
    cursor?: FavouritesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "user_id" | "bestFor" | "venue_id" | "created_by" | "updated_by" | "created_at" | "updated_at"> | undefined;
}
