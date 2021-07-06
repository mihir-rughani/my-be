import { Prisma } from "@prisma/client";
import { ItineraryCreateNestedOneWithoutPlacesInput } from "../inputs/ItineraryCreateNestedOneWithoutPlacesInput";
export declare class Itinerary_placesCreateInput {
    user_id?: string | undefined;
    venue_data?: Prisma.InputJsonValue | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    itinerary?: ItineraryCreateNestedOneWithoutPlacesInput | undefined;
}
