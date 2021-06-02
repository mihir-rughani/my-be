import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class BarsUpdateWithoutUploadFileMorphInput {
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    suburb?: NullableStringFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    postCode?: NullableStringFieldUpdateOperationsInput | undefined;
    lat?: NullableFloatFieldUpdateOperationsInput | undefined;
    lon?: NullableFloatFieldUpdateOperationsInput | undefined;
    breakfast?: NullableBoolFieldUpdateOperationsInput | undefined;
    lunch?: NullableBoolFieldUpdateOperationsInput | undefined;
    dinner?: NullableBoolFieldUpdateOperationsInput | undefined;
    bachelorParty?: NullableBoolFieldUpdateOperationsInput | undefined;
    henParty?: NullableBoolFieldUpdateOperationsInput | undefined;
    visible?: NullableBoolFieldUpdateOperationsInput | undefined;
    published_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    created_by?: NullableIntFieldUpdateOperationsInput | undefined;
    updated_by?: NullableIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
