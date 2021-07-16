import { GraphQLResolveInfo } from "graphql";
import { DeleteFavouritesArgs } from "./args/DeleteFavouritesArgs";
import { Favourites } from "../../../models/Favourites";
export declare class DeleteFavouritesResolver {
    deleteFavourites(ctx: any, info: GraphQLResolveInfo, args: DeleteFavouritesArgs): Promise<Favourites | null>;
}
