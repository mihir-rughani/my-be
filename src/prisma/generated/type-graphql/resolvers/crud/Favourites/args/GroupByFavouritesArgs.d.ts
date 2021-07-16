import { FavouritesOrderByInput } from "../../../inputs/FavouritesOrderByInput";
import { FavouritesScalarWhereWithAggregatesInput } from "../../../inputs/FavouritesScalarWhereWithAggregatesInput";
import { FavouritesWhereInput } from "../../../inputs/FavouritesWhereInput";
export declare class GroupByFavouritesArgs {
    where?: FavouritesWhereInput | undefined;
    orderBy?: FavouritesOrderByInput[] | undefined;
    by: Array<"id" | "user_id" | "bestFor" | "venue_id" | "created_by" | "updated_by" | "created_at" | "updated_at">;
    having?: FavouritesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
