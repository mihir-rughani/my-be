import { Prisma } from "@prisma/client";
import { ItineraryUpdateOneWithoutItinerary_itemsInput } from "../inputs/ItineraryUpdateOneWithoutItinerary_itemsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class Itinerary_itemsUpdateInput {
    user_id?: NullableStringFieldUpdateOperationsInput | undefined;
    published_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    created_by?: NullableIntFieldUpdateOperationsInput | undefined;
    updated_by?: NullableIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    venue_data?: Prisma.InputJsonValue | undefined;
    itinerary?: ItineraryUpdateOneWithoutItinerary_itemsInput | undefined;
}
