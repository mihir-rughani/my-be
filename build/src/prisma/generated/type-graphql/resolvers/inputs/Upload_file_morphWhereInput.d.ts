import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { Upload_fileRelationFilter } from "../inputs/Upload_fileRelationFilter";
import { VenuesRelationFilter } from "../inputs/VenuesRelationFilter";
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
    venues?: VenuesRelationFilter | undefined;
}
