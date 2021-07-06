import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { Itinerary_itemsListRelationFilter } from "../inputs/Itinerary_itemsListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ItineraryWhereInput {
    AND?: ItineraryWhereInput[] | undefined;
    OR?: ItineraryWhereInput[] | undefined;
    NOT?: ItineraryWhereInput[] | undefined;
    id?: IntFilter | undefined;
    user_id?: StringNullableFilter | undefined;
    published_at?: DateTimeNullableFilter | undefined;
    created_by?: IntNullableFilter | undefined;
    updated_by?: IntNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    updated_at?: DateTimeNullableFilter | undefined;
    itinerary_items?: Itinerary_itemsListRelationFilter | undefined;
}
