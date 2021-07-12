import { Prisma } from "@prisma/client";
import { VenuesCreateNestedOneWithoutFavouriteInput } from "../inputs/VenuesCreateNestedOneWithoutFavouriteInput";
export declare class FavouritesCreateInput {
    user_id?: string | undefined;
    bestFor?: Prisma.InputJsonValue | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    venue?: VenuesCreateNestedOneWithoutFavouriteInput | undefined;
}
