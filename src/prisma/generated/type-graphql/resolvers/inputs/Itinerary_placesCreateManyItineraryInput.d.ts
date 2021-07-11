import { Prisma } from "@prisma/client";
export declare class Itinerary_placesCreateManyItineraryInput {
    id?: number | undefined;
    user_id?: string | undefined;
    venue_data?: Prisma.InputJsonValue | undefined;
    date?: Date | undefined;
    time?: Date | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
