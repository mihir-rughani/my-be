import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ItineraryRelationFilter } from "../inputs/ItineraryRelationFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Itinerary_itemsWhereInput {
    AND?: Itinerary_itemsWhereInput[] | undefined;
    OR?: Itinerary_itemsWhereInput[] | undefined;
    NOT?: Itinerary_itemsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    itinerary_id?: IntNullableFilter | undefined;
    user_id?: StringNullableFilter | undefined;
    published_at?: DateTimeNullableFilter | undefined;
    created_by?: IntNullableFilter | undefined;
    updated_by?: IntNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    updated_at?: DateTimeNullableFilter | undefined;
    venue_data?: JsonNullableFilter | undefined;
    itinerary?: ItineraryRelationFilter | undefined;
}
