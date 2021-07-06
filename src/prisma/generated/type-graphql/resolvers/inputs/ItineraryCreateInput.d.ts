import { Itinerary_itemsCreateNestedManyWithoutItineraryInput } from "../inputs/Itinerary_itemsCreateNestedManyWithoutItineraryInput";
export declare class ItineraryCreateInput {
    user_id?: string | undefined;
    published_at?: Date | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    itinerary_items?: Itinerary_itemsCreateNestedManyWithoutItineraryInput | undefined;
}
