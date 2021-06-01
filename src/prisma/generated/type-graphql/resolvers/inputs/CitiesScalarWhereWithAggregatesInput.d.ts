import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class CitiesScalarWhereWithAggregatesInput {
    AND?: CitiesScalarWhereWithAggregatesInput[] | undefined;
    OR?: CitiesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CitiesScalarWhereWithAggregatesInput[] | undefined;
    cityId?: IntWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
}
