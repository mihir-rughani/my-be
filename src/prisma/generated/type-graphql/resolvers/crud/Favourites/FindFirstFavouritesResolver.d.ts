import { GraphQLResolveInfo } from "graphql";
import { FindFirstFavouritesArgs } from "./args/FindFirstFavouritesArgs";
import { Favourites } from "../../../models/Favourites";
export declare class FindFirstFavouritesResolver {
    findFirstFavourites(ctx: any, info: GraphQLResolveInfo, args: FindFirstFavouritesArgs): Promise<Favourites | null>;
}
