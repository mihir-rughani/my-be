import { BarsUpdateOneWithoutUploadFileMorphInput } from "../inputs/BarsUpdateOneWithoutUploadFileMorphInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Upload_fileUpdateOneWithoutUploadFileMorphInput } from "../inputs/Upload_fileUpdateOneWithoutUploadFileMorphInput";
export declare class Upload_file_morphUpdateWithoutRestaurantsInput {
    related_type?: NullableStringFieldUpdateOperationsInput | undefined;
    field?: NullableStringFieldUpdateOperationsInput | undefined;
    order?: NullableIntFieldUpdateOperationsInput | undefined;
    uploadFile?: Upload_fileUpdateOneWithoutUploadFileMorphInput | undefined;
    bars?: BarsUpdateOneWithoutUploadFileMorphInput | undefined;
}
