import { Itinerary_placesCreateNestedManyWithoutItineraryInput } from "../inputs/Itinerary_placesCreateNestedManyWithoutItineraryInput";
export declare class ItineraryCreateInput {
    user_id?: string | undefined;
    itinerary_date?: Date | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    places?: Itinerary_placesCreateNestedManyWithoutItineraryInput | undefined;
}
