import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Upload_file_morphScalarWhereWithAggregatesInput {
    AND?: Upload_file_morphScalarWhereWithAggregatesInput[] | undefined;
    OR?: Upload_file_morphScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Upload_file_morphScalarWhereWithAggregatesInput[] | undefined;
    upload_file_id?: IntWithAggregatesFilter | undefined;
    related_id?: IntWithAggregatesFilter | undefined;
    related_type?: StringNullableWithAggregatesFilter | undefined;
    field?: StringNullableWithAggregatesFilter | undefined;
    order?: IntNullableWithAggregatesFilter | undefined;
}
