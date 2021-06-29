import { Upload_file_morph } from "../models/Upload_file_morph";
export declare class Venues {
    id: number;
    title?: string | null;
    description?: string | null;
    address?: string | null;
    suburb?: string | null;
    city?: string | null;
    postCode?: string | null;
    lat?: number | null;
    lon?: number | null;
    website?: string | null;
    venue_type?: number | null;
    breakfast?: boolean | null;
    lunch?: boolean | null;
    dinner?: boolean | null;
    bachelorParty?: boolean | null;
    henParty?: boolean | null;
    visible?: boolean | null;
    created_by?: number | null;
    updated_by?: number | null;
    created_at?: Date | null;
    updated_at?: Date | null;
    uploadFileMorph?: Upload_file_morph[];
}
