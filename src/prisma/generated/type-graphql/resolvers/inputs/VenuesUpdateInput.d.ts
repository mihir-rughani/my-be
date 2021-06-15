import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Upload_file_morphUpdateManyWithoutVenuesInput } from "../inputs/Upload_file_morphUpdateManyWithoutVenuesInput";
export declare class VenuesUpdateInput {
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    address?: NullableStringFieldUpdateOperationsInput | undefined;
    suburb?: NullableStringFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    postCode?: NullableStringFieldUpdateOperationsInput | undefined;
    lat?: NullableFloatFieldUpdateOperationsInput | undefined;
    lon?: NullableFloatFieldUpdateOperationsInput | undefined;
    website?: NullableStringFieldUpdateOperationsInput | undefined;
    venue_type?: NullableIntFieldUpdateOperationsInput | undefined;
    breakfast?: NullableBoolFieldUpdateOperationsInput | undefined;
    lunch?: NullableBoolFieldUpdateOperationsInput | undefined;
    dinner?: NullableBoolFieldUpdateOperationsInput | undefined;
    bachelorParty?: NullableBoolFieldUpdateOperationsInput | undefined;
    henParty?: NullableBoolFieldUpdateOperationsInput | undefined;
    visible?: NullableBoolFieldUpdateOperationsInput | undefined;
    created_by?: NullableIntFieldUpdateOperationsInput | undefined;
    updated_by?: NullableIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    uploadFileMorph?: Upload_file_morphUpdateManyWithoutVenuesInput | undefined;
}
