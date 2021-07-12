import { Prisma } from "@prisma/client";
import { ItineraryCreateNestedOneWithoutPlacesInput } from "../inputs/ItineraryCreateNestedOneWithoutPlacesInput";
import { VenuesCreateNestedOneWithoutItinerary_placesInput } from "../inputs/VenuesCreateNestedOneWithoutItinerary_placesInput";
export declare class Itinerary_placesCreateInput {
    user_id?: string | undefined;
    venue_data: Prisma.InputJsonValue;
    bestFor?: Prisma.InputJsonValue | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    date?: Date | undefined;
    time?: Date | undefined;
    venue?: VenuesCreateNestedOneWithoutItinerary_placesInput | undefined;
    itinerary?: ItineraryCreateNestedOneWithoutPlacesInput | undefined;
}
