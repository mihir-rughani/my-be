import { VenuesAvgAggregate } from "../outputs/VenuesAvgAggregate";
import { VenuesCountAggregate } from "../outputs/VenuesCountAggregate";
import { VenuesMaxAggregate } from "../outputs/VenuesMaxAggregate";
import { VenuesMinAggregate } from "../outputs/VenuesMinAggregate";
import { VenuesSumAggregate } from "../outputs/VenuesSumAggregate";
export declare class VenuesGroupBy {
    id: number;
    title: string | null;
    description: string | null;
    address: string | null;
    suburb: string | null;
    city: string | null;
    postCode: string | null;
    lat: number | null;
    lon: number | null;
    website: string | null;
    venue_type: number | null;
    breakfast: boolean | null;
    lunch: boolean | null;
    dinner: boolean | null;
    visible: boolean | null;
    created_by: number | null;
    updated_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    test: string | null;
    cosy: boolean | null;
    romantic: boolean | null;
    weddings: boolean | null;
    post_code: string | null;
    bachelor_party: boolean | null;
    hen_party: boolean | null;
    outdoor_area: boolean | null;
    outdoor_dinning: boolean | null;
    outdoor_bar: boolean | null;
    _count: VenuesCountAggregate | null;
    _avg: VenuesAvgAggregate | null;
    _sum: VenuesSumAggregate | null;
    _min: VenuesMinAggregate | null;
    _max: VenuesMaxAggregate | null;
}
