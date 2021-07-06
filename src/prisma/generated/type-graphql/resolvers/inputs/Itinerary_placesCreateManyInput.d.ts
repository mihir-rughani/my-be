import { Prisma } from "@prisma/client";
export declare class Itinerary_placesCreateManyInput {
    id?: number | undefined;
    user_id?: string | undefined;
    itinerary_id?: number | undefined;
    venue_data?: Prisma.InputJsonValue | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
