import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CitiesWhereInput {
    AND?: CitiesWhereInput[] | undefined;
    OR?: CitiesWhereInput[] | undefined;
    NOT?: CitiesWhereInput[] | undefined;
    cityId?: IntFilter | undefined;
    name?: StringNullableFilter | undefined;
}
