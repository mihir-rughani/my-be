import { Upload_file_morphCreateNestedManyWithoutRestaurantsInput } from "../inputs/Upload_file_morphCreateNestedManyWithoutRestaurantsInput";
export declare class RestaurantsCreateInput {
    title?: string | undefined;
    description?: string | undefined;
    lat?: number | undefined;
    lon?: number | undefined;
    suburb?: string | undefined;
    city?: string | undefined;
    postCode?: number | undefined;
    published_at?: Date | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    breakfast?: boolean | undefined;
    lunch?: boolean | undefined;
    dinner?: boolean | undefined;
    bachelorParty?: boolean | undefined;
    henParty?: boolean | undefined;
    uploadFileMorph?: Upload_file_morphCreateNestedManyWithoutRestaurantsInput | undefined;
}
