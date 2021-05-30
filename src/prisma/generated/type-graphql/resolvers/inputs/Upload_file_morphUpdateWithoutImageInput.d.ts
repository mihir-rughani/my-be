import { BarsUpdateOneRequiredWithoutImageInput } from "../inputs/BarsUpdateOneRequiredWithoutImageInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RestaurantsUpdateOneRequiredWithoutImageInput } from "../inputs/RestaurantsUpdateOneRequiredWithoutImageInput";
export declare class Upload_file_morphUpdateWithoutImageInput {
    related_type?: NullableStringFieldUpdateOperationsInput | undefined;
    field?: NullableStringFieldUpdateOperationsInput | undefined;
    order?: NullableIntFieldUpdateOperationsInput | undefined;
    bars?: BarsUpdateOneRequiredWithoutImageInput | undefined;
    restaurants?: RestaurantsUpdateOneRequiredWithoutImageInput | undefined;
}
