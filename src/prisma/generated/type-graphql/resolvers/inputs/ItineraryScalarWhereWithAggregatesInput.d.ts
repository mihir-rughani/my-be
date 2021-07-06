import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ItineraryScalarWhereWithAggregatesInput {
    AND?: ItineraryScalarWhereWithAggregatesInput[] | undefined;
    OR?: ItineraryScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ItineraryScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    user_id?: StringNullableWithAggregatesFilter | undefined;
    published_at?: DateTimeNullableWithAggregatesFilter | undefined;
    created_by?: IntNullableWithAggregatesFilter | undefined;
    updated_by?: IntNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
