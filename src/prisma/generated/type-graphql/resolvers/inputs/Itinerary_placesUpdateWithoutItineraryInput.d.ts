import { Prisma } from "@prisma/client";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class Itinerary_placesUpdateWithoutItineraryInput {
    user_id?: NullableStringFieldUpdateOperationsInput | undefined;
    venue_data?: Prisma.InputJsonValue | undefined;
    date?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    time?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    created_by?: NullableIntFieldUpdateOperationsInput | undefined;
    updated_by?: NullableIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
