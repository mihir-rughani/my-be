import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { FloatNullableWithAggregatesFilter } from "../inputs/FloatNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class RestaurantsScalarWhereWithAggregatesInput {
    AND?: RestaurantsScalarWhereWithAggregatesInput[] | undefined;
    OR?: RestaurantsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: RestaurantsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    title?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    lat?: FloatNullableWithAggregatesFilter | undefined;
    lon?: FloatNullableWithAggregatesFilter | undefined;
    suburb?: StringNullableWithAggregatesFilter | undefined;
    city?: StringNullableWithAggregatesFilter | undefined;
    postCode?: IntNullableWithAggregatesFilter | undefined;
    published_at?: DateTimeNullableWithAggregatesFilter | undefined;
    created_by?: IntNullableWithAggregatesFilter | undefined;
    updated_by?: IntNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
    breakfast?: BoolNullableWithAggregatesFilter | undefined;
    lunch?: BoolNullableWithAggregatesFilter | undefined;
    dinner?: BoolNullableWithAggregatesFilter | undefined;
    bachelorParty?: BoolNullableWithAggregatesFilter | undefined;
    henParty?: BoolNullableWithAggregatesFilter | undefined;
}
