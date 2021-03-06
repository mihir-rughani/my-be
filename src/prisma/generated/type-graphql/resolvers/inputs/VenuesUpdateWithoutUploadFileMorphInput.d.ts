import { FavouritesUpdateOneWithoutVenueInput } from "../inputs/FavouritesUpdateOneWithoutVenueInput";
import { Itinerary_placesUpdateOneWithoutVenueInput } from "../inputs/Itinerary_placesUpdateOneWithoutVenueInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { VenueTypeUpdateOneWithoutVenuesInput } from "../inputs/VenueTypeUpdateOneWithoutVenuesInput";
export declare class VenuesUpdateWithoutUploadFileMorphInput {
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    address?: NullableStringFieldUpdateOperationsInput | undefined;
    suburb?: NullableStringFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    postCode?: NullableStringFieldUpdateOperationsInput | undefined;
    lat?: NullableFloatFieldUpdateOperationsInput | undefined;
    lon?: NullableFloatFieldUpdateOperationsInput | undefined;
    website?: NullableStringFieldUpdateOperationsInput | undefined;
    breakfast?: NullableBoolFieldUpdateOperationsInput | undefined;
    lunch?: NullableBoolFieldUpdateOperationsInput | undefined;
    dinner?: NullableBoolFieldUpdateOperationsInput | undefined;
    visible?: NullableBoolFieldUpdateOperationsInput | undefined;
    created_by?: NullableIntFieldUpdateOperationsInput | undefined;
    updated_by?: NullableIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    test?: NullableStringFieldUpdateOperationsInput | undefined;
    cosy?: NullableBoolFieldUpdateOperationsInput | undefined;
    romantic?: NullableBoolFieldUpdateOperationsInput | undefined;
    weddings?: NullableBoolFieldUpdateOperationsInput | undefined;
    post_code?: NullableStringFieldUpdateOperationsInput | undefined;
    bachelor_party?: NullableBoolFieldUpdateOperationsInput | undefined;
    hen_party?: NullableBoolFieldUpdateOperationsInput | undefined;
    outdoor_area?: NullableBoolFieldUpdateOperationsInput | undefined;
    outdoor_dinning?: NullableBoolFieldUpdateOperationsInput | undefined;
    outdoor_bar?: NullableBoolFieldUpdateOperationsInput | undefined;
    venueType?: VenueTypeUpdateOneWithoutVenuesInput | undefined;
    favourite?: FavouritesUpdateOneWithoutVenueInput | undefined;
    itinerary_places?: Itinerary_placesUpdateOneWithoutVenueInput | undefined;
}
