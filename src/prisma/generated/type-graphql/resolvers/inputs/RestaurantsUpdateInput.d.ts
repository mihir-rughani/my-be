import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Upload_file_morphUpdateManyWithoutRestaurantsInput } from "../inputs/Upload_file_morphUpdateManyWithoutRestaurantsInput";
export declare class RestaurantsUpdateInput {
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    lat?: NullableFloatFieldUpdateOperationsInput | undefined;
    lon?: NullableFloatFieldUpdateOperationsInput | undefined;
    suburb?: NullableStringFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    postCode?: NullableIntFieldUpdateOperationsInput | undefined;
    published_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    created_by?: NullableIntFieldUpdateOperationsInput | undefined;
    updated_by?: NullableIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    breakfast?: NullableBoolFieldUpdateOperationsInput | undefined;
    lunch?: NullableBoolFieldUpdateOperationsInput | undefined;
    dinner?: NullableBoolFieldUpdateOperationsInput | undefined;
    bachelorParty?: NullableBoolFieldUpdateOperationsInput | undefined;
    henParty?: NullableBoolFieldUpdateOperationsInput | undefined;
    restaurant_image?: NullableIntFieldUpdateOperationsInput | undefined;
    uploadFileMorph?: Upload_file_morphUpdateManyWithoutRestaurantsInput | undefined;
}
