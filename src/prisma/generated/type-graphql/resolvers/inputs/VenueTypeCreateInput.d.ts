import { VenuesCreateNestedManyWithoutVenueTypeInput } from "../inputs/VenuesCreateNestedManyWithoutVenueTypeInput";
export declare class VenueTypeCreateInput {
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    name?: string | undefined;
    venues?: VenuesCreateNestedManyWithoutVenueTypeInput | undefined;
}
