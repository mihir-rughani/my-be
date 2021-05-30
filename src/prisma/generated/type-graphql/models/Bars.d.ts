import { Upload_file_morph } from "../models/Upload_file_morph";
export declare class Bars {
    id: number;
    title?: string | null;
    description?: string | null;
    suburb?: string | null;
    city?: string | null;
    postCode?: string | null;
    lat?: number | null;
    lon?: number | null;
    breakfast?: boolean | null;
    lunch?: boolean | null;
    dinner?: boolean | null;
    bachelorParty?: boolean | null;
    henParty?: boolean | null;
    visible?: boolean | null;
    published_at?: Date | null;
    created_by?: number | null;
    updated_by?: number | null;
    created_at?: Date | null;
    updated_at?: Date | null;
    image?: Upload_file_morph | null;
}
