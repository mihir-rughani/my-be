import { VenuesAvgAggregate } from "../outputs/VenuesAvgAggregate";
import { VenuesCountAggregate } from "../outputs/VenuesCountAggregate";
import { VenuesMaxAggregate } from "../outputs/VenuesMaxAggregate";
import { VenuesMinAggregate } from "../outputs/VenuesMinAggregate";
import { VenuesSumAggregate } from "../outputs/VenuesSumAggregate";
export declare class AggregateVenues {
    _count: VenuesCountAggregate | null;
    _avg: VenuesAvgAggregate | null;
    _sum: VenuesSumAggregate | null;
    _min: VenuesMinAggregate | null;
    _max: VenuesMaxAggregate | null;
}
