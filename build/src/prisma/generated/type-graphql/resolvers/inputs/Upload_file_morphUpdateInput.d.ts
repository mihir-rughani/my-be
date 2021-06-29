import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Upload_fileUpdateOneWithoutUploadFileMorphInput } from "../inputs/Upload_fileUpdateOneWithoutUploadFileMorphInput";
import { VenuesUpdateOneWithoutUploadFileMorphInput } from "../inputs/VenuesUpdateOneWithoutUploadFileMorphInput";
export declare class Upload_file_morphUpdateInput {
    related_type?: NullableStringFieldUpdateOperationsInput | undefined;
    field?: NullableStringFieldUpdateOperationsInput | undefined;
    order?: NullableIntFieldUpdateOperationsInput | undefined;
    uploadFile?: Upload_fileUpdateOneWithoutUploadFileMorphInput | undefined;
    venues?: VenuesUpdateOneWithoutUploadFileMorphInput | undefined;
}
