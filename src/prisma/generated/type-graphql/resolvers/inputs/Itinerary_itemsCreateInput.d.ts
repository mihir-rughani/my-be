import { Prisma } from "@prisma/client";
import { ItineraryCreateNestedOneWithoutItinerary_itemsInput } from "../inputs/ItineraryCreateNestedOneWithoutItinerary_itemsInput";
export declare class Itinerary_itemsCreateInput {
    user_id?: string | undefined;
    published_at?: Date | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    venue_data?: Prisma.InputJsonValue | undefined;
    itinerary?: ItineraryCreateNestedOneWithoutItinerary_itemsInput | undefined;
}
