import { BarsCreateNestedOneWithoutUploadFileMorphInput } from "../inputs/BarsCreateNestedOneWithoutUploadFileMorphInput";
import { Upload_fileCreateNestedOneWithoutUploadFileMorphInput } from "../inputs/Upload_fileCreateNestedOneWithoutUploadFileMorphInput";
export declare class Upload_file_morphCreateWithoutRestaurantsInput {
    related_type?: string | undefined;
    field?: string | undefined;
    order?: number | undefined;
    uploadFile?: Upload_fileCreateNestedOneWithoutUploadFileMorphInput | undefined;
    bars?: BarsCreateNestedOneWithoutUploadFileMorphInput | undefined;
}
