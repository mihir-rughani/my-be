import { BarsUpdateOneWithoutUploadFileMorphInput } from "../inputs/BarsUpdateOneWithoutUploadFileMorphInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RestaurantsUpdateOneWithoutUploadFileMorphInput } from "../inputs/RestaurantsUpdateOneWithoutUploadFileMorphInput";
export declare class Upload_file_morphUpdateWithoutUploadFileInput {
    related_type?: NullableStringFieldUpdateOperationsInput | undefined;
    field?: NullableStringFieldUpdateOperationsInput | undefined;
    order?: NullableIntFieldUpdateOperationsInput | undefined;
    bars?: BarsUpdateOneWithoutUploadFileMorphInput | undefined;
    restaurants?: RestaurantsUpdateOneWithoutUploadFileMorphInput | undefined;
}
