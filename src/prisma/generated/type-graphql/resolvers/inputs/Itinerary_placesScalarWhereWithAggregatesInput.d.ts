import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { JsonNullableWithAggregatesFilter } from "../inputs/JsonNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Itinerary_placesScalarWhereWithAggregatesInput {
    AND?: Itinerary_placesScalarWhereWithAggregatesInput[] | undefined;
    OR?: Itinerary_placesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Itinerary_placesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    user_id?: StringNullableWithAggregatesFilter | undefined;
    itinerary_id?: IntNullableWithAggregatesFilter | undefined;
    venue_data?: JsonNullableWithAggregatesFilter | undefined;
    created_by?: IntNullableWithAggregatesFilter | undefined;
    updated_by?: IntNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
