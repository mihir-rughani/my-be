import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Upload_file_morphScalarWhereInput {
    AND?: Upload_file_morphScalarWhereInput[] | undefined;
    OR?: Upload_file_morphScalarWhereInput[] | undefined;
    NOT?: Upload_file_morphScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    upload_file_id?: IntNullableFilter | undefined;
    related_id?: IntNullableFilter | undefined;
    related_type?: StringNullableFilter | undefined;
    field?: StringNullableFilter | undefined;
    order?: IntNullableFilter | undefined;
}
