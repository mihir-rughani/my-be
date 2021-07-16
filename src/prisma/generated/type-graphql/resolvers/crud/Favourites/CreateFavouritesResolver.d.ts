import { GraphQLResolveInfo } from "graphql";
import { CreateFavouritesArgs } from "./args/CreateFavouritesArgs";
import { Favourites } from "../../../models/Favourites";
export declare class CreateFavouritesResolver {
    createFavourites(ctx: any, info: GraphQLResolveInfo, args: CreateFavouritesArgs): Promise<Favourites>;
}
