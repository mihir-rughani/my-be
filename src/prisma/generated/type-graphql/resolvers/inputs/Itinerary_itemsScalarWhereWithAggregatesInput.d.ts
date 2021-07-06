import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { JsonNullableWithAggregatesFilter } from "../inputs/JsonNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Itinerary_itemsScalarWhereWithAggregatesInput {
    AND?: Itinerary_itemsScalarWhereWithAggregatesInput[] | undefined;
    OR?: Itinerary_itemsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Itinerary_itemsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    itinerary_id?: IntNullableWithAggregatesFilter | undefined;
    user_id?: StringNullableWithAggregatesFilter | undefined;
    published_at?: DateTimeNullableWithAggregatesFilter | undefined;
    created_by?: IntNullableWithAggregatesFilter | undefined;
    updated_by?: IntNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
    venue_data?: JsonNullableWithAggregatesFilter | undefined;
}
