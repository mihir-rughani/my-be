import { BarsCreateNestedOneWithoutUploadFileMorphInput } from "../inputs/BarsCreateNestedOneWithoutUploadFileMorphInput";
import { RestaurantsCreateNestedOneWithoutUploadFileMorphInput } from "../inputs/RestaurantsCreateNestedOneWithoutUploadFileMorphInput";
export declare class Upload_file_morphCreateWithoutUploadFileInput {
    related_type?: string | undefined;
    field?: string | undefined;
    order?: number | undefined;
    bars?: BarsCreateNestedOneWithoutUploadFileMorphInput | undefined;
    restaurants?: RestaurantsCreateNestedOneWithoutUploadFileMorphInput | undefined;
}
