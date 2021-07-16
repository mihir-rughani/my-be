import { GraphQLResolveInfo } from "graphql";
import { FindUniqueFavouritesArgs } from "./args/FindUniqueFavouritesArgs";
import { Favourites } from "../../../models/Favourites";
export declare class FindUniqueFavouritesResolver {
    findUniqueFavourites(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFavouritesArgs): Promise<Favourites | null>;
}
