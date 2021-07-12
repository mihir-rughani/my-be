import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { VenuesRelationFilter } from "../inputs/VenuesRelationFilter";
export declare class FavouritesWhereInput {
    AND?: FavouritesWhereInput[] | undefined;
    OR?: FavouritesWhereInput[] | undefined;
    NOT?: FavouritesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    user_id?: StringNullableFilter | undefined;
    bestFor?: JsonNullableFilter | undefined;
    venue_id?: IntNullableFilter | undefined;
    created_by?: IntNullableFilter | undefined;
    updated_by?: IntNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    updated_at?: DateTimeNullableFilter | undefined;
    venue?: VenuesRelationFilter | undefined;
}
