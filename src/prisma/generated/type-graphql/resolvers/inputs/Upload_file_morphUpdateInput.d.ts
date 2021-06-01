import { BarsUpdateOneWithoutUploadFileMorphInput } from "../inputs/BarsUpdateOneWithoutUploadFileMorphInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RestaurantsUpdateOneWithoutUploadFileMorphInput } from "../inputs/RestaurantsUpdateOneWithoutUploadFileMorphInput";
import { Upload_fileUpdateOneWithoutUploadFileMorphInput } from "../inputs/Upload_fileUpdateOneWithoutUploadFileMorphInput";
export declare class Upload_file_morphUpdateInput {
    related_type?: NullableStringFieldUpdateOperationsInput | undefined;
    field?: NullableStringFieldUpdateOperationsInput | undefined;
    order?: NullableIntFieldUpdateOperationsInput | undefined;
    uploadFile?: Upload_fileUpdateOneWithoutUploadFileMorphInput | undefined;
    bars?: BarsUpdateOneWithoutUploadFileMorphInput | undefined;
    restaurants?: RestaurantsUpdateOneWithoutUploadFileMorphInput | undefined;
}
