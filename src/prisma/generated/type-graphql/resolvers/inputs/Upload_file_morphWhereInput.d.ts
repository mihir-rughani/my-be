import { BarsRelationFilter } from "../inputs/BarsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { RestaurantsRelationFilter } from "../inputs/RestaurantsRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { Upload_fileRelationFilter } from "../inputs/Upload_fileRelationFilter";
export declare class Upload_file_morphWhereInput {
    AND?: Upload_file_morphWhereInput[] | undefined;
    OR?: Upload_file_morphWhereInput[] | undefined;
    NOT?: Upload_file_morphWhereInput[] | undefined;
    id?: IntFilter | undefined;
    upload_file_id?: IntNullableFilter | undefined;
    related_id?: IntNullableFilter | undefined;
    related_type?: StringNullableFilter | undefined;
    field?: StringNullableFilter | undefined;
    order?: IntNullableFilter | undefined;
    uploadFile?: Upload_fileRelationFilter | undefined;
    bars?: BarsRelationFilter | undefined;
    restaurants?: RestaurantsRelationFilter | undefined;
}
