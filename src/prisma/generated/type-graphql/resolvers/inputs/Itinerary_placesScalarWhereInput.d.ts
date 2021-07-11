import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Itinerary_placesScalarWhereInput {
    AND?: Itinerary_placesScalarWhereInput[] | undefined;
    OR?: Itinerary_placesScalarWhereInput[] | undefined;
    NOT?: Itinerary_placesScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    user_id?: StringNullableFilter | undefined;
    itinerary_id?: IntNullableFilter | undefined;
    venue_data?: JsonNullableFilter | undefined;
    date?: DateTimeNullableFilter | undefined;
    time?: DateTimeNullableFilter | undefined;
    created_by?: IntNullableFilter | undefined;
    updated_by?: IntNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    updated_at?: DateTimeNullableFilter | undefined;
}
