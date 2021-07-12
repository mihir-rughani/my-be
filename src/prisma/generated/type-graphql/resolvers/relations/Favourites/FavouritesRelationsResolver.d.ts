import { Favourites } from "../../../models/Favourites";
import { Venues } from "../../../models/Venues";
export declare class FavouritesRelationsResolver {
    venue(favourites: Favourites, ctx: any): Promise<Venues | null>;
}
