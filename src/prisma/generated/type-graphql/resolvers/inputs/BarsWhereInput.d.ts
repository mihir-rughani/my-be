import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { Upload_file_morphRelationFilter } from "../inputs/Upload_file_morphRelationFilter";
export declare class BarsWhereInput {
    AND?: BarsWhereInput[] | undefined;
    OR?: BarsWhereInput[] | undefined;
    NOT?: BarsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    suburb?: StringNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    postCode?: StringNullableFilter | undefined;
    lat?: FloatNullableFilter | undefined;
    lon?: FloatNullableFilter | undefined;
    breakfast?: BoolNullableFilter | undefined;
    lunch?: BoolNullableFilter | undefined;
    dinner?: BoolNullableFilter | undefined;
    bachelorParty?: BoolNullableFilter | undefined;
    henParty?: BoolNullableFilter | undefined;
    visible?: BoolNullableFilter | undefined;
    published_at?: DateTimeNullableFilter | undefined;
    created_by?: IntNullableFilter | undefined;
    updated_by?: IntNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    updated_at?: DateTimeNullableFilter | undefined;
    image?: Upload_file_morphRelationFilter | undefined;
}
