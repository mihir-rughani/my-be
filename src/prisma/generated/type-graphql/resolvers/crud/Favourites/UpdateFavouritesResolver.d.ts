import { GraphQLResolveInfo } from "graphql";
import { UpdateFavouritesArgs } from "./args/UpdateFavouritesArgs";
import { Favourites } from "../../../models/Favourites";
export declare class UpdateFavouritesResolver {
    updateFavourites(ctx: any, info: GraphQLResolveInfo, args: UpdateFavouritesArgs): Promise<Favourites | null>;
}
