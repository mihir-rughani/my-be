import { Upload_file_morphCreateNestedManyWithoutBarsInput } from "../inputs/Upload_file_morphCreateNestedManyWithoutBarsInput";
export declare class BarsCreateInput {
    title?: string | undefined;
    description?: string | undefined;
    suburb?: string | undefined;
    city?: string | undefined;
    postCode?: string | undefined;
    lat?: number | undefined;
    lon?: number | undefined;
    breakfast?: boolean | undefined;
    lunch?: boolean | undefined;
    dinner?: boolean | undefined;
    bachelorParty?: boolean | undefined;
    henParty?: boolean | undefined;
    visible?: boolean | undefined;
    published_at?: Date | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    uploadFileMorph?: Upload_file_morphCreateNestedManyWithoutBarsInput | undefined;
}
