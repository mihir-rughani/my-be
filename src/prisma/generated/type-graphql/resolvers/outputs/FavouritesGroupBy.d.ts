import { Prisma } from "@prisma/client";
import { FavouritesAvgAggregate } from "../outputs/FavouritesAvgAggregate";
import { FavouritesCountAggregate } from "../outputs/FavouritesCountAggregate";
import { FavouritesMaxAggregate } from "../outputs/FavouritesMaxAggregate";
import { FavouritesMinAggregate } from "../outputs/FavouritesMinAggregate";
import { FavouritesSumAggregate } from "../outputs/FavouritesSumAggregate";
export declare class FavouritesGroupBy {
    id: number;
    user_id: string | null;
    bestFor: Prisma.JsonValue | null;
    venue_id: number | null;
    created_by: number | null;
    updated_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: FavouritesCountAggregate | null;
    _avg: FavouritesAvgAggregate | null;
    _sum: FavouritesSumAggregate | null;
    _min: FavouritesMinAggregate | null;
    _max: FavouritesMaxAggregate | null;
}
