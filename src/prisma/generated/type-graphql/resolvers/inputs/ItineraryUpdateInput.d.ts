import { Itinerary_placesUpdateManyWithoutItineraryInput } from "../inputs/Itinerary_placesUpdateManyWithoutItineraryInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class ItineraryUpdateInput {
    user_id?: NullableStringFieldUpdateOperationsInput | undefined;
    itinerary_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    created_by?: NullableIntFieldUpdateOperationsInput | undefined;
    updated_by?: NullableIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    places?: Itinerary_placesUpdateManyWithoutItineraryInput | undefined;
}
