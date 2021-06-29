import { VenueTypeAvgAggregate } from "../outputs/VenueTypeAvgAggregate";
import { VenueTypeCountAggregate } from "../outputs/VenueTypeCountAggregate";
import { VenueTypeMaxAggregate } from "../outputs/VenueTypeMaxAggregate";
import { VenueTypeMinAggregate } from "../outputs/VenueTypeMinAggregate";
import { VenueTypeSumAggregate } from "../outputs/VenueTypeSumAggregate";
export declare class VenueTypeGroupBy {
    id: number;
    created_by: number | null;
    updated_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    name: string | null;
    _count: VenueTypeCountAggregate | null;
    _avg: VenueTypeAvgAggregate | null;
    _sum: VenueTypeSumAggregate | null;
    _min: VenueTypeMinAggregate | null;
    _max: VenueTypeMaxAggregate | null;
}
