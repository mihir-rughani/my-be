import { GraphQLResolveInfo } from "graphql";
import { UpsertFavouritesArgs } from "./args/UpsertFavouritesArgs";
import { Favourites } from "../../../models/Favourites";
export declare class UpsertFavouritesResolver {
    upsertFavourites(ctx: any, info: GraphQLResolveInfo, args: UpsertFavouritesArgs): Promise<Favourites>;
}
