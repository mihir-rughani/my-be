import { Prisma } from "@prisma/client";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { VenuesUpdateOneWithoutFavouriteInput } from "../inputs/VenuesUpdateOneWithoutFavouriteInput";
export declare class FavouritesUpdateInput {
    user_id?: NullableStringFieldUpdateOperationsInput | undefined;
    bestFor?: Prisma.InputJsonValue | undefined;
    created_by?: NullableIntFieldUpdateOperationsInput | undefined;
    updated_by?: NullableIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    venue?: VenuesUpdateOneWithoutFavouriteInput | undefined;
}
