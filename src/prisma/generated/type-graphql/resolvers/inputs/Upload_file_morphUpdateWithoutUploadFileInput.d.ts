import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { VenuesUpdateOneWithoutUploadFileMorphInput } from "../inputs/VenuesUpdateOneWithoutUploadFileMorphInput";
export declare class Upload_file_morphUpdateWithoutUploadFileInput {
    related_type?: NullableStringFieldUpdateOperationsInput | undefined;
    field?: NullableStringFieldUpdateOperationsInput | undefined;
    order?: NullableIntFieldUpdateOperationsInput | undefined;
    venues?: VenuesUpdateOneWithoutUploadFileMorphInput | undefined;
}
