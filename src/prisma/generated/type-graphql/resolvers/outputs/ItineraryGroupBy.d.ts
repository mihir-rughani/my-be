import { ItineraryAvgAggregate } from "../outputs/ItineraryAvgAggregate";
import { ItineraryCountAggregate } from "../outputs/ItineraryCountAggregate";
import { ItineraryMaxAggregate } from "../outputs/ItineraryMaxAggregate";
import { ItineraryMinAggregate } from "../outputs/ItineraryMinAggregate";
import { ItinerarySumAggregate } from "../outputs/ItinerarySumAggregate";
export declare class ItineraryGroupBy {
    id: number;
    user_id: string | null;
    itinerary_date: Date | null;
    created_by: number | null;
    updated_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: ItineraryCountAggregate | null;
    _avg: ItineraryAvgAggregate | null;
    _sum: ItinerarySumAggregate | null;
    _min: ItineraryMinAggregate | null;
    _max: ItineraryMaxAggregate | null;
}
