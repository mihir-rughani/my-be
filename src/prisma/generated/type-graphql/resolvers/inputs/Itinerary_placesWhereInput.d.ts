import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ItineraryRelationFilter } from "../inputs/ItineraryRelationFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { VenuesRelationFilter } from "../inputs/VenuesRelationFilter";
export declare class Itinerary_placesWhereInput {
    AND?: Itinerary_placesWhereInput[] | undefined;
    OR?: Itinerary_placesWhereInput[] | undefined;
    NOT?: Itinerary_placesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    itinerary_id?: IntFilter | undefined;
    user_id?: StringNullableFilter | undefined;
    venue_data?: JsonFilter | undefined;
    bestFor?: JsonNullableFilter | undefined;
    created_by?: IntNullableFilter | undefined;
    updated_by?: IntNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    updated_at?: DateTimeNullableFilter | undefined;
    date?: DateTimeNullableFilter | undefined;
    time?: DateTimeNullableFilter | undefined;
    venue_id?: IntNullableFilter | undefined;
    venue?: VenuesRelationFilter | undefined;
    itinerary?: ItineraryRelationFilter | undefined;
}
