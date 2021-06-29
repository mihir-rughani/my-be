import { Venues } from "../models/Venues";
export declare class VenueType {
    id: number;
    created_by?: number | null;
    updated_by?: number | null;
    created_at?: Date | null;
    updated_at?: Date | null;
    name?: string | null;
    venues?: Venues[];
}
