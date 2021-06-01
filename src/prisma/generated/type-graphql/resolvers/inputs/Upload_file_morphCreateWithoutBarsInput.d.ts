import { RestaurantsCreateNestedOneWithoutUploadFileMorphInput } from "../inputs/RestaurantsCreateNestedOneWithoutUploadFileMorphInput";
import { Upload_fileCreateNestedOneWithoutUploadFileMorphInput } from "../inputs/Upload_fileCreateNestedOneWithoutUploadFileMorphInput";
export declare class Upload_file_morphCreateWithoutBarsInput {
    related_type?: string | undefined;
    field?: string | undefined;
    order?: number | undefined;
    uploadFile?: Upload_fileCreateNestedOneWithoutUploadFileMorphInput | undefined;
    restaurants?: RestaurantsCreateNestedOneWithoutUploadFileMorphInput | undefined;
}
