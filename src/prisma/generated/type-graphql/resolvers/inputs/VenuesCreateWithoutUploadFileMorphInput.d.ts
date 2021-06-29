import { VenueTypeCreateNestedOneWithoutVenuesInput } from "../inputs/VenueTypeCreateNestedOneWithoutVenuesInput";
export declare class VenuesCreateWithoutUploadFileMorphInput {
    title?: string | undefined;
    description?: string | undefined;
    address?: string | undefined;
    suburb?: string | undefined;
    city?: string | undefined;
    postCode?: string | undefined;
    lat?: number | undefined;
    lon?: number | undefined;
    website?: string | undefined;
    breakfast?: boolean | undefined;
    lunch?: boolean | undefined;
    dinner?: boolean | undefined;
    visible?: boolean | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    test?: string | undefined;
    cosy?: boolean | undefined;
    romantic?: boolean | undefined;
    weddings?: boolean | undefined;
    post_code?: string | undefined;
    bachelor_party?: boolean | undefined;
    hen_party?: boolean | undefined;
    outdoor_area?: boolean | undefined;
    outdoor_dinning?: boolean | undefined;
    outdoor_bar?: boolean | undefined;
    venueType?: VenueTypeCreateNestedOneWithoutVenuesInput | undefined;
}
