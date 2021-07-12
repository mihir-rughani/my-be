import { Prisma } from "@prisma/client";
import { ItineraryUpdateOneWithoutPlacesInput } from "../inputs/ItineraryUpdateOneWithoutPlacesInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { VenuesUpdateOneWithoutItinerary_placesInput } from "../inputs/VenuesUpdateOneWithoutItinerary_placesInput";
export declare class Itinerary_placesUpdateInput {
    user_id?: NullableStringFieldUpdateOperationsInput | undefined;
    venue_data?: Prisma.InputJsonValue | undefined;
    bestFor?: Prisma.InputJsonValue | undefined;
    created_by?: NullableIntFieldUpdateOperationsInput | undefined;
    updated_by?: NullableIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    date?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    time?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    venue?: VenuesUpdateOneWithoutItinerary_placesInput | undefined;
    itinerary?: ItineraryUpdateOneWithoutPlacesInput | undefined;
}
