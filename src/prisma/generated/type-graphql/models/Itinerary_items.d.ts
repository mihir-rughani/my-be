import { Prisma } from "@prisma/client";
import { Itinerary } from "../models/Itinerary";
export declare class Itinerary_items {
    id: number;
    itinerary_id?: number | null;
    user_id?: string | null;
    published_at?: Date | null;
    created_by?: number | null;
    updated_by?: number | null;
    created_at?: Date | null;
    updated_at?: Date | null;
    venue_data?: Prisma.JsonValue | null;
    itinerary?: Itinerary | null;
}
