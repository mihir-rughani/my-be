import { GraphQLResolveInfo } from "graphql";
import { FindManyFavouritesArgs } from "./args/FindManyFavouritesArgs";
import { Favourites } from "../../../models/Favourites";
export declare class FindManyFavouritesResolver {
    findManyFavourites(ctx: any, info: GraphQLResolveInfo, args: FindManyFavouritesArgs): Promise<Favourites[]>;
}
