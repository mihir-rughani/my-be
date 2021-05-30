import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RestaurantsUpdateOneRequiredWithoutImageInput } from "../inputs/RestaurantsUpdateOneRequiredWithoutImageInput";
import { Upload_fileUpdateOneRequiredWithoutImageInput } from "../inputs/Upload_fileUpdateOneRequiredWithoutImageInput";
export declare class Upload_file_morphUpdateWithoutBarsInput {
    related_type?: NullableStringFieldUpdateOperationsInput | undefined;
    field?: NullableStringFieldUpdateOperationsInput | undefined;
    order?: NullableIntFieldUpdateOperationsInput | undefined;
    image?: Upload_fileUpdateOneRequiredWithoutImageInput | undefined;
    restaurants?: RestaurantsUpdateOneRequiredWithoutImageInput | undefined;
}
