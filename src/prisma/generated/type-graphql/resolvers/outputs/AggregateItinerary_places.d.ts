import { Itinerary_placesAvgAggregate } from "../outputs/Itinerary_placesAvgAggregate";
import { Itinerary_placesCountAggregate } from "../outputs/Itinerary_placesCountAggregate";
import { Itinerary_placesMaxAggregate } from "../outputs/Itinerary_placesMaxAggregate";
import { Itinerary_placesMinAggregate } from "../outputs/Itinerary_placesMinAggregate";
import { Itinerary_placesSumAggregate } from "../outputs/Itinerary_placesSumAggregate";
export declare class AggregateItinerary_places {
    _count: Itinerary_placesCountAggregate | null;
    _avg: Itinerary_placesAvgAggregate | null;
    _sum: Itinerary_placesSumAggregate | null;
    _min: Itinerary_placesMinAggregate | null;
    _max: Itinerary_placesMaxAggregate | null;
}
