import { Prisma } from "@prisma/client";
export declare class Itinerary_placesCreateManyInput {
    id?: number | undefined;
    itinerary_id: number;
    user_id?: string | undefined;
    venue_data: Prisma.InputJsonValue;
    bestFor?: Prisma.InputJsonValue | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    date?: Date | undefined;
    time?: Date | undefined;
    venue_id?: number | undefined;
}
