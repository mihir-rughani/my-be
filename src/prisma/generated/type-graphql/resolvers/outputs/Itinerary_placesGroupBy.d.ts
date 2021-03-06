import { Prisma } from "@prisma/client";
import { Itinerary_placesAvgAggregate } from "../outputs/Itinerary_placesAvgAggregate";
import { Itinerary_placesCountAggregate } from "../outputs/Itinerary_placesCountAggregate";
import { Itinerary_placesMaxAggregate } from "../outputs/Itinerary_placesMaxAggregate";
import { Itinerary_placesMinAggregate } from "../outputs/Itinerary_placesMinAggregate";
import { Itinerary_placesSumAggregate } from "../outputs/Itinerary_placesSumAggregate";
export declare class Itinerary_placesGroupBy {
    id: number;
    itinerary_id: number;
    user_id: string | null;
    venue_data: Prisma.JsonValue;
    bestFor: Prisma.JsonValue | null;
    created_by: number | null;
    updated_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    date: Date | null;
    time: Date | null;
    venue_id: number | null;
    _count: Itinerary_placesCountAggregate | null;
    _avg: Itinerary_placesAvgAggregate | null;
    _sum: Itinerary_placesSumAggregate | null;
    _min: Itinerary_placesMinAggregate | null;
    _max: Itinerary_placesMaxAggregate | null;
}
