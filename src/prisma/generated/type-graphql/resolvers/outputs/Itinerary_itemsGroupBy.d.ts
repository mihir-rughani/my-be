import { Prisma } from "@prisma/client";
import { Itinerary_itemsAvgAggregate } from "../outputs/Itinerary_itemsAvgAggregate";
import { Itinerary_itemsCountAggregate } from "../outputs/Itinerary_itemsCountAggregate";
import { Itinerary_itemsMaxAggregate } from "../outputs/Itinerary_itemsMaxAggregate";
import { Itinerary_itemsMinAggregate } from "../outputs/Itinerary_itemsMinAggregate";
import { Itinerary_itemsSumAggregate } from "../outputs/Itinerary_itemsSumAggregate";
export declare class Itinerary_itemsGroupBy {
    id: number;
    itinerary_id: number | null;
    user_id: string | null;
    published_at: Date | null;
    created_by: number | null;
    updated_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    venue_data: Prisma.JsonValue | null;
    _count: Itinerary_itemsCountAggregate | null;
    _avg: Itinerary_itemsAvgAggregate | null;
    _sum: Itinerary_itemsSumAggregate | null;
    _min: Itinerary_itemsMinAggregate | null;
    _max: Itinerary_itemsMaxAggregate | null;
}
