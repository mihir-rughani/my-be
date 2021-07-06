import { Itinerary_items } from "../models/Itinerary_items";
export declare class Itinerary {
    id: number;
    user_id?: string | null;
    published_at?: Date | null;
    created_by?: number | null;
    updated_by?: number | null;
    created_at?: Date | null;
    updated_at?: Date | null;
    itinerary_items?: Itinerary_items[];
}
