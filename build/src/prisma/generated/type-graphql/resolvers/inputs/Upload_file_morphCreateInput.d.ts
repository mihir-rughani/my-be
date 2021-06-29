import { Upload_fileCreateNestedOneWithoutUploadFileMorphInput } from "../inputs/Upload_fileCreateNestedOneWithoutUploadFileMorphInput";
import { VenuesCreateNestedOneWithoutUploadFileMorphInput } from "../inputs/VenuesCreateNestedOneWithoutUploadFileMorphInput";
export declare class Upload_file_morphCreateInput {
    related_type?: string | undefined;
    field?: string | undefined;
    order?: number | undefined;
    uploadFile?: Upload_fileCreateNestedOneWithoutUploadFileMorphInput | undefined;
    venues?: VenuesCreateNestedOneWithoutUploadFileMorphInput | undefined;
}
