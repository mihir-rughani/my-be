import { ItineraryAvgAggregate } from "../outputs/ItineraryAvgAggregate";
import { ItineraryCountAggregate } from "../outputs/ItineraryCountAggregate";
import { ItineraryMaxAggregate } from "../outputs/ItineraryMaxAggregate";
import { ItineraryMinAggregate } from "../outputs/ItineraryMinAggregate";
import { ItinerarySumAggregate } from "../outputs/ItinerarySumAggregate";
export declare class AggregateItinerary {
    _count: ItineraryCountAggregate | null;
    _avg: ItineraryAvgAggregate | null;
    _sum: ItinerarySumAggregate | null;
    _min: ItineraryMinAggregate | null;
    _max: ItineraryMaxAggregate | null;
}
