import { Prisma } from "@prisma/client";
import { Itinerary } from "../models/Itinerary";
import { Venues } from "../models/Venues";
export declare class Itinerary_places {
    id: number;
    itinerary_id: number;
    user_id?: string | null;
    venue_data: Prisma.JsonValue;
    bestFor?: Prisma.JsonValue | null;
    created_by?: number | null;
    updated_by?: number | null;
    created_at?: Date | null;
    updated_at?: Date | null;
    date?: Date | null;
    time?: Date | null;
    venue_id?: number | null;
    venue?: Venues | null;
    itinerary?: Itinerary | null;
}
