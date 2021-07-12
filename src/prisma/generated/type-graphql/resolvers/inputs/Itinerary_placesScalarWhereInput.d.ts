import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Itinerary_placesScalarWhereInput {
    AND?: Itinerary_placesScalarWhereInput[] | undefined;
    OR?: Itinerary_placesScalarWhereInput[] | undefined;
    NOT?: Itinerary_placesScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    itinerary_id?: IntFilter | undefined;
    user_id?: StringNullableFilter | undefined;
    venue_data?: JsonFilter | undefined;
    bestFor?: JsonNullableFilter | undefined;
    created_by?: IntNullableFilter | undefined;
    updated_by?: IntNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    updated_at?: DateTimeNullableFilter | undefined;
    date?: DateTimeNullableFilter | undefined;
    time?: DateTimeNullableFilter | undefined;
    venue_id?: IntNullableFilter | undefined;
}
