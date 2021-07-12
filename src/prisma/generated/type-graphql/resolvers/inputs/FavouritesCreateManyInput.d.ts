import { Prisma } from "@prisma/client";
export declare class FavouritesCreateManyInput {
    id?: number | undefined;
    user_id?: string | undefined;
    bestFor?: Prisma.InputJsonValue | undefined;
    venue_id?: number | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
