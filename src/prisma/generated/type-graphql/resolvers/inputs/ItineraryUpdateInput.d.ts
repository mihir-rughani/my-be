import { Itinerary_itemsUpdateManyWithoutItineraryInput } from "../inputs/Itinerary_itemsUpdateManyWithoutItineraryInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class ItineraryUpdateInput {
    user_id?: NullableStringFieldUpdateOperationsInput | undefined;
    published_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    created_by?: NullableIntFieldUpdateOperationsInput | undefined;
    updated_by?: NullableIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    itinerary_items?: Itinerary_itemsUpdateManyWithoutItineraryInput | undefined;
}
