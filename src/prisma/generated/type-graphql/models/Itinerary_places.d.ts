import { Prisma } from "@prisma/client";
import { Itinerary } from "../models/Itinerary";
export declare class Itinerary_places {
    id: number;
    user_id?: string | null;
    itinerary_id?: number | null;
    venue_data?: Prisma.JsonValue | null;
    created_by?: number | null;
    updated_by?: number | null;
    created_at?: Date | null;
    updated_at?: Date | null;
    itinerary?: Itinerary | null;
}
