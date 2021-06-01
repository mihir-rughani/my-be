import { Upload_file_morph } from "../models/Upload_file_morph";
export declare class Restaurants {
    id: number;
    title?: string | null;
    description?: string | null;
    lat?: number | null;
    lon?: number | null;
    suburb?: string | null;
    city?: string | null;
    postCode?: number | null;
    published_at?: Date | null;
    created_by?: number | null;
    updated_by?: number | null;
    created_at?: Date | null;
    updated_at?: Date | null;
    breakfast?: boolean | null;
    lunch?: boolean | null;
    dinner?: boolean | null;
    bachelorParty?: boolean | null;
    henParty?: boolean | null;
    restaurant_image?: number | null;
    uploadFileMorph?: Upload_file_morph[];
}
