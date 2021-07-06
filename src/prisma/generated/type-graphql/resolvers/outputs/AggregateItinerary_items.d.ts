import { Itinerary_itemsAvgAggregate } from "../outputs/Itinerary_itemsAvgAggregate";
import { Itinerary_itemsCountAggregate } from "../outputs/Itinerary_itemsCountAggregate";
import { Itinerary_itemsMaxAggregate } from "../outputs/Itinerary_itemsMaxAggregate";
import { Itinerary_itemsMinAggregate } from "../outputs/Itinerary_itemsMinAggregate";
import { Itinerary_itemsSumAggregate } from "../outputs/Itinerary_itemsSumAggregate";
export declare class AggregateItinerary_items {
    _count: Itinerary_itemsCountAggregate | null;
    _avg: Itinerary_itemsAvgAggregate | null;
    _sum: Itinerary_itemsSumAggregate | null;
    _min: Itinerary_itemsMinAggregate | null;
    _max: Itinerary_itemsMaxAggregate | null;
}
