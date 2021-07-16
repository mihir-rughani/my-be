import { Prisma } from "@prisma/client";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class Itinerary_placesUpdateManyMutationInput {
    user_id?: NullableStringFieldUpdateOperationsInput | undefined;
    venue_data?: Prisma.InputJsonValue | undefined;
    bestFor?: Prisma.InputJsonValue | undefined;
    created_by?: NullableIntFieldUpdateOperationsInput | undefined;
    updated_by?: NullableIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    date?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    time?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
