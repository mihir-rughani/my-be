import { Prisma } from "@prisma/client";
export declare class Itinerary_itemsCreateManyItineraryInput {
    id?: number | undefined;
    user_id?: string | undefined;
    published_at?: Date | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    venue_data?: Prisma.InputJsonValue | undefined;
}
