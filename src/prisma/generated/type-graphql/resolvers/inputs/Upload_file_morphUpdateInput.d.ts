import { BarsUpdateOneRequiredWithoutImageInput } from "../inputs/BarsUpdateOneRequiredWithoutImageInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RestaurantsUpdateOneRequiredWithoutImageInput } from "../inputs/RestaurantsUpdateOneRequiredWithoutImageInput";
import { Upload_fileUpdateOneRequiredWithoutImageInput } from "../inputs/Upload_fileUpdateOneRequiredWithoutImageInput";
export declare class Upload_file_morphUpdateInput {
    related_type?: NullableStringFieldUpdateOperationsInput | undefined;
    field?: NullableStringFieldUpdateOperationsInput | undefined;
    order?: NullableIntFieldUpdateOperationsInput | undefined;
    image?: Upload_fileUpdateOneRequiredWithoutImageInput | undefined;
    bars?: BarsUpdateOneRequiredWithoutImageInput | undefined;
    restaurants?: RestaurantsUpdateOneRequiredWithoutImageInput | undefined;
}
