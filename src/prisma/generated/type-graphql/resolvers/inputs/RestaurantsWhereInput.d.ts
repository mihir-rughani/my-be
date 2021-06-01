import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { Upload_file_morphListRelationFilter } from "../inputs/Upload_file_morphListRelationFilter";
export declare class RestaurantsWhereInput {
    AND?: RestaurantsWhereInput[] | undefined;
    OR?: RestaurantsWhereInput[] | undefined;
    NOT?: RestaurantsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    lat?: FloatNullableFilter | undefined;
    lon?: FloatNullableFilter | undefined;
    suburb?: StringNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    postCode?: IntNullableFilter | undefined;
    published_at?: DateTimeNullableFilter | undefined;
    created_by?: IntNullableFilter | undefined;
    updated_by?: IntNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    updated_at?: DateTimeNullableFilter | undefined;
    breakfast?: BoolNullableFilter | undefined;
    lunch?: BoolNullableFilter | undefined;
    dinner?: BoolNullableFilter | undefined;
    bachelorParty?: BoolNullableFilter | undefined;
    henParty?: BoolNullableFilter | undefined;
    restaurant_image?: IntNullableFilter | undefined;
    uploadFileMorph?: Upload_file_morphListRelationFilter | undefined;
}
