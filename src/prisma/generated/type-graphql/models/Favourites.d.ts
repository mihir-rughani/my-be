import { Prisma } from "@prisma/client";
import { Venues } from "../models/Venues";
export declare class Favourites {
    id: number;
    user_id?: string | null;
    bestFor?: Prisma.JsonValue | null;
    venue_id?: number | null;
    created_by?: number | null;
    updated_by?: number | null;
    created_at?: Date | null;
    updated_at?: Date | null;
    venue?: Venues | null;
}
