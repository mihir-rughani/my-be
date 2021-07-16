import { FavouritesAvgAggregate } from "../outputs/FavouritesAvgAggregate";
import { FavouritesCountAggregate } from "../outputs/FavouritesCountAggregate";
import { FavouritesMaxAggregate } from "../outputs/FavouritesMaxAggregate";
import { FavouritesMinAggregate } from "../outputs/FavouritesMinAggregate";
import { FavouritesSumAggregate } from "../outputs/FavouritesSumAggregate";
export declare class AggregateFavourites {
    _count: FavouritesCountAggregate | null;
    _avg: FavouritesAvgAggregate | null;
    _sum: FavouritesSumAggregate | null;
    _min: FavouritesMinAggregate | null;
    _max: FavouritesMaxAggregate | null;
}
