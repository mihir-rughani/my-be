import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Itinerary_itemsScalarWhereInput {
    AND?: Itinerary_itemsScalarWhereInput[] | undefined;
    OR?: Itinerary_itemsScalarWhereInput[] | undefined;
    NOT?: Itinerary_itemsScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    itinerary_id?: IntNullableFilter | undefined;
    user_id?: StringNullableFilter | undefined;
    published_at?: DateTimeNullableFilter | undefined;
    created_by?: IntNullableFilter | undefined;
    updated_by?: IntNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    updated_at?: DateTimeNullableFilter | undefined;
    venue_data?: JsonNullableFilter | undefined;
}
