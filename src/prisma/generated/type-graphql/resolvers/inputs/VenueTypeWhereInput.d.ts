import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class VenueTypeWhereInput {
    AND?: VenueTypeWhereInput[] | undefined;
    OR?: VenueTypeWhereInput[] | undefined;
    NOT?: VenueTypeWhereInput[] | undefined;
    id?: IntFilter | undefined;
    created_by?: IntNullableFilter | undefined;
    updated_by?: IntNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    updated_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
}
