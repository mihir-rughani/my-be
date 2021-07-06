import { Itinerary_places } from "../models/Itinerary_places";
export declare class Itinerary {
    id: number;
    user_id?: string | null;
    itinerary_date?: Date | null;
    created_by?: number | null;
    updated_by?: number | null;
    created_at?: Date | null;
    updated_at?: Date | null;
    places?: Itinerary_places[];
}
