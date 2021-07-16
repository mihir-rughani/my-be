import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { JsonNullableWithAggregatesFilter } from "../inputs/JsonNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class FavouritesScalarWhereWithAggregatesInput {
    AND?: FavouritesScalarWhereWithAggregatesInput[] | undefined;
    OR?: FavouritesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: FavouritesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    user_id?: StringNullableWithAggregatesFilter | undefined;
    bestFor?: JsonNullableWithAggregatesFilter | undefined;
    venue_id?: IntNullableWithAggregatesFilter | undefined;
    created_by?: IntNullableWithAggregatesFilter | undefined;
    updated_by?: IntNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
